# Saodust

Saodust is an Obsidian knowledge-base health check skill. It turns "my vault feels messy" into a concrete report.

## What It Checks

- Inbox backlog
- Stale active projects
- Finished projects that should be archived
- Orphan notes
- Cold resources
- Dead wikilinks
- Root-folder hygiene

## Example

```text
/saodust --dry-run
```

Expected result: a report with a score, findings, and top three cleanup actions.

## Privacy

Saodust is read-first. It should not move or delete files unless the user explicitly asks for a follow-up cleanup.
