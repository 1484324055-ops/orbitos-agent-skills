# Compatibility

OrbitOS Agent Skills are plain Markdown instruction bundles.

## Tested/Targeted Agent Types

- Codex-style coding agents with local file access
- Claude Code-style local agents with skills support
- OpenCode/OpenClaw-style local agents
- Any agent runtime that can load `SKILL.md`

## Expected Skill Layout

```text
skills/
  skill-name/
    SKILL.md
    README.md
```

## Portability Notes

- The public skills avoid hard-coded private paths.
- Obsidian examples use generic folder names and should be adapted to the user's vault.
- Saodust assumes Markdown notes and Obsidian-style wikilinks.
- Writing skills can be used without Obsidian, but saved-draft sections are designed for Markdown.

## Windows Notes

Saodust can be implemented with PowerShell for filesystem metadata and mtime checks. When editing files on Windows, prefer safe native commands and avoid destructive shell pipelines.
