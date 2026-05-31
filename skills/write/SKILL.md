---
name: write
description: Chinese long-form writing workflow. Turns a rough idea, note, transcript, article, or user brief into a structured public article draft with source separation, clarification questions, outline options, external references, and quality checks.
---

# Write

Write is a structured Chinese long-form writing workflow. It is designed for creators who want an agent to help turn rough ideas into publishable drafts without losing source boundaries.

## When To Use

Use this skill when the user asks to:

- write an article
- turn an idea into a public essay
- expand a note into a long-form draft
- create a WeChat article
- revise a rough draft into a clearer article
- produce a content draft with source tracking

## Workflow

1. Preserve the user's original input in a "User Words" section when creating a saved draft.
2. Ask up to six clarification questions before writing:
   - Why write this?
   - Who is the reader?
   - What is the core claim?
   - What real scene, example, or evidence supports it?
   - What should readers take away?
   - What should readers do next, if anything?
3. Classify the article shape:
   - product experience
   - method explanation
   - trend judgment
   - case reflection
   - personal operating note
4. Offer two or three outline options before drafting, unless the user already gave a clear direction.
5. Gather external references when the article relies on current facts, products, prices, dates, or public claims.
6. Draft the article with clear separation between:
   - user words
   - external references
   - AI synthesis
7. Run a quality check:
   - no invented customer stories
   - no unsupported data
   - no vague inspirational ending
   - no over-polished AI summary sentences
   - at least one concrete scene or example
   - title matches the real conflict of the article
8. If the user asks for platform packaging, provide title candidates, summary, tags, and cover-copy suggestions.

## Output

Use this structure for a saved draft:

```markdown
---
title:
type: post
status: draft
created:
tags:
---

# Title

## Publishing Notes

## Article Draft

## User Words

## External References

## AI Synthesis Notes

## Revision Log
```

For a chat-only draft, keep the same sections but shorten non-public notes.

## Safety Rules

- Do not imitate a named living creator's identity or private style guide.
- Do not include private customer data unless the user explicitly approves.
- Do not make up "a friend", "a client", or "someone told me" examples.
- If references are current or factual, browse or ask for source material.
- Separate public content from internal notes.

## Tone Guidance

Prefer concrete, plain Chinese. Use scenes, actions, and reader-facing judgments. Avoid slogans, vague conclusions, and symmetrical AI-style endings.
