# Using These Skills With Codex

This repository is designed to be easy to review and adapt with Codex-style local agents.

## Typical Maintenance Tasks

- review `SKILL.md` files for unclear instructions
- add safe examples that use fake data only
- test whether a skill asks for enough context before acting
- check pull requests for privacy leaks
- improve compatibility notes for local agent runtimes
- refactor repeated instruction patterns across skills

## Suggested Codex Prompt

```text
Review skills/write/SKILL.md for unclear steps, privacy risks, and missing output requirements.
Suggest a minimal patch and keep all examples free of private data.
```

## Safe Runtime Assumptions

These public skills should not assume access to a private Obsidian vault, customer files, API keys, browser sessions, or unpublished business material. A user can provide private context at runtime, but that context should not be committed back to this repository.

## Review Checklist

- Does the skill explain when it should trigger?
- Does it define expected inputs and outputs?
- Does it separate user words, references, and AI synthesis?
- Does it avoid hard-coded private paths?
- Does it avoid copying third-party creator styles?
- Does it include a privacy note when files are inspected?
