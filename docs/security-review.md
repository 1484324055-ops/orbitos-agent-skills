# Security Review Notes

Agent skills can influence file operations, summarization, and publishing workflows. This project treats safety and privacy as part of the skill design.

## Risks We Review

- prompt injection from copied web content
- accidental exposure of local vault paths
- committing private examples or customer data
- unsafe file edits or destructive cleanup steps
- unclear boundaries between source material and AI synthesis
- instructions that imitate a third-party creator too closely

## Public Skill Policy

Public skills must use generic examples and fake data. Private context belongs in a user's local runtime, not in this repository.

## Security Checklist For Pull Requests

- examples use fake names and fake data
- no API keys, cookies, or tokens are present
- no private Obsidian paths are present
- destructive actions require explicit confirmation
- generated drafts do not claim unverified facts
- third-party content is summarized or referenced without copying private or copyrighted material

## Reporting

If you find a security or privacy issue, please follow `SECURITY.md` and avoid posting sensitive details in a public issue.
