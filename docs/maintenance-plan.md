# Maintenance Plan

This project is maintained as a small, practical open-source skill collection rather than a large framework.

## Current Scope

- keep the three public skills usable and privacy-safe
- add examples that show realistic but fake data
- document compatibility with Codex-style and Claude Code-style agents
- keep validation lightweight and easy to run locally

## Near-Term Roadmap

- add English quickstart examples for every skill
- add a versioned skill manifest and expand validation coverage
- add fake Obsidian vault fixtures for `saodust`
- add privacy checklist tests for examples
- improve Codex-specific review prompts
- add more before/after examples for `write`
- document common failure modes for multi-platform content adaptation

## Release Policy

- patch releases: typo fixes, docs improvements, safer examples
- minor releases: new skill fields, new examples, compatibility notes
- major releases: breaking changes to skill structure or manifest format

## Review Standards

Every public change should preserve four boundaries:

- no private user data
- no hard-coded local paths
- no unverifiable third-party attribution
- no unsafe file operations without an explicit user confirmation step
