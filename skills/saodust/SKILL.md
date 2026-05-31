---
name: saodust
description: Obsidian knowledge-base health check. Scans inbox backlog, stale active projects, archivable projects, orphan notes, cold resources, dead wikilinks, and root-folder hygiene, then produces a concise entropy report. Trigger with /saodust or "scan my vault".
---

# Saodust

Saodust is a read-first Obsidian vault health check. It helps a user see where a knowledge base is accumulating entropy without silently changing files.

## When To Use

Use this skill when the user asks to:

- scan an Obsidian vault
- check knowledge-base health
- find stale projects
- find orphan notes
- find dead wikilinks
- generate a cleanup report
- run `/saodust`

## Workflow

1. Confirm the current working directory is the vault root or ask the user for the vault path.
2. Run a read-only scan unless the user explicitly asks to save the report.
3. Exclude hidden/system directories such as `.obsidian`, `.git`, `.agents`, `.codex`, `.vscode`, and archive folders by default.
4. Score seven dimensions:
   - inbox backlog: notes in `00_Inbox` or `00_收件箱` older than 7 days
   - stale active projects: active project notes not touched for 30 days
   - archivable projects: completed projects that still live outside the archive
   - orphan notes: notes with no wikilink inlinks and no outlinks
   - cold resources: old resources with no inbound references
   - dead links: wikilinks pointing to missing notes
   - root hygiene: unexpected root folders or loose Markdown files
5. Produce a report with one-sentence diagnosis, per-dimension findings, total entropy score, and top three cleanup actions.
6. If the user asks to save the report, write it to the inbox using a date-based filename and never overwrite an existing report.

## Output

Use this structure:

```markdown
# Knowledge Base Health Report · YYYY-MM-DD

## One-Line Diagnosis

## Dimension 1: Inbox Backlog
## Dimension 2: Stale Active Projects
## Dimension 3: Archivable Projects
## Dimension 4: Orphan Notes
## Dimension 5: Cold Resources
## Dimension 6: Dead Links
## Dimension 7: Root Hygiene

## Entropy Score

| Dimension | Weight | Score | Note |
| --- | ---: | ---: | --- |

## Top 3 Cleanup Actions

## Notes
```

## Safety Rules

- Do not delete, move, merge, or rename files during the scan.
- Treat cleanup actions as recommendations unless the user explicitly asks to execute them.
- Do not inspect private binary attachments unless needed for the user's request.
- Do not include hidden directory paths or private machine paths in a public report.

## Implementation Notes

Prefer native filesystem search and Markdown parsing where available. On Windows, PowerShell is acceptable for metadata and mtime checks. For link checks, parse `[[wikilinks]]`, remove aliases after `|`, and remove headings after `#`.
