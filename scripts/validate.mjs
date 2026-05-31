import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const skillsDir = path.join(root, "skills");
const requiredFiles = ["README.md", "LICENSE", "CONTRIBUTING.md", "CHANGELOG.md", "NOTICE.md"];

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
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log("All checks passed.");
}
