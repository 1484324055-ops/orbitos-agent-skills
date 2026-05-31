import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");
const manifestPath = path.join(root, "skill-manifest.json");
const requiredFiles = ["README.md", "LICENSE", "CONTRIBUTING.md", "CHANGELOG.md", "NOTICE.md", "SECURITY.md"];

let failed = false;

function fail(message) {
  failed = true;
  console.error(`FAIL ${message}`);
}

function pass(message) {
  console.log(`OK   ${message}`);
}

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  fs.existsSync(fullPath) ? pass(`${file} exists`) : fail(`${file} is missing`);
}

let manifest = null;
if (!fs.existsSync(manifestPath)) {
  fail("skill-manifest.json is missing");
} else {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    pass("skill-manifest.json is valid JSON");
    if (!Array.isArray(manifest.skills) || manifest.skills.length === 0) {
      fail("skill-manifest.json must include a non-empty skills array");
    }
  } catch (error) {
    fail(`skill-manifest.json is invalid JSON: ${error.message}`);
  }
}

if (!fs.existsSync(skillsDir)) {
  fail("skills directory is missing");
} else {
  const skills = fs.readdirSync(skillsDir, { withFileTypes: true }).filter((entry) => entry.isDirectory());
  if (skills.length === 0) fail("no skills found");

  for (const skill of skills) {
    const skillPath = path.join(skillsDir, skill.name);
    const skillFile = path.join(skillPath, "SKILL.md");
    const readmeFile = path.join(skillPath, "README.md");

    if (!fs.existsSync(skillFile)) {
      fail(`${skill.name}/SKILL.md is missing`);
      continue;
    }

    const content = fs.readFileSync(skillFile, "utf8");
    if (!content.startsWith("---\n")) fail(`${skill.name}/SKILL.md must start with YAML frontmatter`);
    if (!/^name:\s*.+$/m.test(content)) fail(`${skill.name}/SKILL.md frontmatter needs name`);
    if (!/^description:\s*.+$/m.test(content)) fail(`${skill.name}/SKILL.md frontmatter needs description`);
    if (!content.includes("## Workflow")) fail(`${skill.name}/SKILL.md should include a Workflow section`);
    if (!content.includes("## Output")) fail(`${skill.name}/SKILL.md should include an Output section`);
    fs.existsSync(readmeFile) ? pass(`${skill.name}/README.md exists`) : fail(`${skill.name}/README.md is missing`);

    if (manifest?.skills) {
      const item = manifest.skills.find((entry) => entry.id === skill.name);
      if (!item) {
        fail(`${skill.name} is missing from skill-manifest.json`);
      } else if (!fs.existsSync(path.join(root, item.path))) {
        fail(`${skill.name} manifest path does not exist: ${item.path}`);
      } else {
        pass(`${skill.name} manifest entry exists`);
      }
    }
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log("All checks passed.");
}
