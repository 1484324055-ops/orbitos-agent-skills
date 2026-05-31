# Design Principles

## 1. Preserve Source Boundaries

Agent work becomes hard to trust when user input, external references, and AI synthesis are blended together. These skills keep them separate.

Recommended sections:

- User Words
- External References
- AI Synthesis Notes
- Revision Log

## 2. Privacy Before Polish

The public skills do not assume access to private folders, customer records, personal voice corpora, or unpublished business strategies.

If a local workflow needs private context, it should be loaded by the user at runtime instead of being bundled into the skill.

## 3. Workflow Over Prompt

Each skill describes a repeatable workflow:

- when to trigger
- what to inspect
- what questions to ask
- how to structure output
- what quality checks to run

This makes the skill maintainable and easier to adapt across agents.

## 4. Chinese-First Output

The writing workflows are optimized for Chinese public content platforms. They prefer concrete Chinese expression, platform-specific packaging, and clear publishing notes.

## 5. No False Authority

Skills should not imitate named creators, invent customer stories, fabricate metrics, or present private assumptions as public facts.
