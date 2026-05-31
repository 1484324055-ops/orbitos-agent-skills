---
name: four-platform-daily-content
description: Chinese multi-platform content workflow. Adapts one idea, source note, transcript, or article into WeChat, Xiaohongshu, X, and Douyin drafts with platform-specific goals instead of simple summarization.
---

# Four Platform Daily Content

This skill turns one source idea into four platform-specific Chinese content drafts. The core rule is not "same article, shorter versions". Each platform has a different job.

## When To Use

Use this skill when the user asks to:

- make four platform versions
- adapt content for WeChat, Xiaohongshu, X, and Douyin
- create a daily content package
- turn a note into multi-platform posts
- generate X short posts from a longer idea
- produce Chinese social content variants

## Workflow

1. Capture the source idea and preserve user words when saving the output.
2. Identify the main claim, reader, evidence, and boundary of the source.
3. Classify the content type:
   - hot take
   - tool observation
   - method checklist
   - case reflection
   - product note
4. Decide platform jobs:
   - WeChat: explain context, conflict, judgment, and conclusion.
   - Xiaohongshu: make the idea saveable through lists, checks, and concrete takeaways.
   - X: test one or more sharp standalone opinions.
   - Douyin: create conflict, rhythm, and short-line retention for image/text or spoken delivery.
5. Generate title candidates for every platform.
6. Draft each platform separately instead of compressing one text.
7. For X, score candidate viewpoints before deciding whether to output one strong post or several independent posts.
8. Run a humanization check:
   - remove abstract slogans
   - keep concrete actions
   - avoid fake stories
   - preserve useful roughness in the user's language
   - keep one main point per platform

## Output

Use this structure:

```markdown
# Topic

## Source Notes

## Content Brief

## WeChat Version
### Publishing Spec
### Title Candidates
### Draft

## Xiaohongshu Version
### Publishing Spec
### Title Candidates
### Draft
### Tags

## X Version
### Viewpoint Scores
### Recommended Post
### Alternate Posts

## Douyin Version
### Publishing Spec
### Title Candidates
### Script Or Caption
### Tags

## User Words

## External References

## Revision Log
```

## Safety Rules

- Do not expose private background that the user only provided for context.
- Do not invent customer cases, comments, or platform metrics.
- Do not copy third-party creator style guides.
- Do not split one complete X idea into weak fragments just to increase quantity.
- If current facts are involved, verify them through reliable sources.

## Platform Notes

X can be sharper than the other platforms. Xiaohongshu should be more saveable. Douyin needs stronger opening tension. WeChat should preserve reasoning and context.
