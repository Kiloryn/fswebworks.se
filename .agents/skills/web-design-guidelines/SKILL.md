---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Web Interface Guidelines

Review files for compliance with Web Interface Guidelines.

## How It Works

1. Read the vendored guidelines in `references/command.md` (this folder)
2. If the network is up, fetch the source URL below. If it differs, use the fetched copy and update the vendored file
3. Read the specified files (or prompt for files/pattern)
4. Check against all rules in the guidelines
5. Output findings in the terse `file:line` format

On this project, Swedish sentence case and locked brand copy win over the guidelines' Title Case / English voice rules. Fix function (focus, labels, tap targets, alt). Do not restyle a room to match a SaaS template.

## Guidelines Source

Vendored: `references/command.md`

Upstream (fetch when possible):

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

## Usage

When a user provides a file or pattern argument:
1. Load guidelines as above
2. Read the specified files
3. Apply all rules from the guidelines
4. Output findings using the format specified in the guidelines

If no files specified, review the files touched in the current change.
