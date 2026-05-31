# Saodust Example

User request:

```text
/saodust --dry-run
```

Expected behavior:

1. Confirm the current directory is an Obsidian vault.
2. Scan Markdown files without changing them.
3. Report inbox backlog, stale projects, orphan notes, dead links, and root-folder hygiene.
4. Return top three cleanup recommendations.

Example output excerpt:

```markdown
## One-Line Diagnosis

The vault is mostly healthy, but stale active projects and orphan notes are increasing.

## Top 3 Cleanup Actions

1. Review 3 active projects untouched for 30+ days.
2. Link or archive 8 orphan notes.
3. Fix 2 dead wikilinks in the project index.
```
