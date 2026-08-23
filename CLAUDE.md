# vikasmenon.com

Personal site for Vikas Menon. Vanilla HTML + CSS, no build step. Vercel auto-deploys on push.

This file is the project constitution. Every Claude session in this directory reads it. The same rules apply whether you're driving the laptop directly or have been woken by Claude Dispatch from a phone.

## Branch model

- `main` = production. https://www.vikasmenon.com. Vercel deploys on push.
- `preview` = staging. Vercel preview URL at the branch's deployment in the Vercel dashboard (pattern: `https://vikasmenon-git-preview-ssupppp.vercel.app/`).
- **All edits start on `preview`.** Never commit to `main` directly.
- `main` only advances via fast-forward merge from `preview`.

Why this model: the same iteration loop works for both modes. Local sessions get instant browser refresh on `file://` plus the Vercel preview deploy when pushed. Dispatch sessions get the Vercel preview URL as the visual review channel. One mental model, no special-casing.

## Verbs

Use the `/vikasmenon` skill, or these verbs in natural language. Either works.

| Verb | What it does |
|---|---|
| `status` | `git status`, current branch, last commits, preview vs main divergence |
| `preview` | Stage + commit on `preview`, push to origin (Vercel auto-deploys), reply with the preview URL |
| `ship` | Fast-forward `main` from `preview`, push to production |
| `revert` | Discard local changes, or hard-reset `preview` back to `main` (ask which) |
| `compare` | `git diff main..preview --stat` to see what's pending review |

Full procedure for each verb lives in `~/.claude/skills/vikasmenon/SKILL.md`.

## Brand and voice

- Brand bible: `~/.claude/skills/cmo/brand.md`. Read before any user-facing copy change.
- Ground voice in real vikasmenon.com essays (especially "AI-Native Games: Still Hour One" and "Enjoy Your Breakfasts"). Never fabricate anecdotes, quotes, or numbers. See `~/.claude/projects/C--Users-Vikas/memory/feedback_voice_grounding.md`.
- Run `/humanizer` on every visible-string change before `ship`. Mandatory.

## IA and design

- Nav: **Writing / Building / Now**. Three items. The brand bible's three pillars (Operator-grade AI craft / Building in public / Business of consumer AI) are invisible plumbing — they shape *which* essays and projects get featured, never appear as section labels, nav, or tags. See `~/.claude/projects/C--Users-Vikas/memory/feedback_strategy_not_in_ux.md`.
- Editorial register: Instrument Serif display, Source Serif 4 body, Geist Mono UI metadata. Warm bone bg (`#FAF9F7`), near-black ink (`#0C0A09`). Hairline rules, no cards. Minimal motion (single 600ms hero fade-in, color/border hover transitions ≤ 200ms).
- Building section uses log-style: year rail · title + status pill · 2-3 sentence desc · monospace metrics line · arrow.

## What lives where

| File | Purpose |
|---|---|
| `index.html` | Homepage — Hero / Writing / Building / Now / Contact strip |
| `articles.html` | All essays — TOC with deks at top, full text below |
| `styles.css` | Single source of truth for tokens, components, responsive |
| `snackula.html`, `redflag.html`, `bowldem.html`, `plumo.html`, `helicopter-game.html`, `fantasy-team-rater.html`, `samson-prompt-engine.html`, `rook.html`, `port-of-hormuz.html`, `autoacquire.html`, `bowldem-reddit.html`, `sony-tv-skill.html`, `session-memory.html` | Detail pages using `.project-detail__*` template, all linked from the homepage Building list |
| `llms.txt`, `robots.txt`, `sitemap.xml` | LLM/SEO surfaces |

## What does NOT go on this site

- **Zynga titles as project entries.** CSR2, FarmVille, Mafia Wars are past experience, not projects he built. They live in the Now-section bio line only. Never list them in Building or Portfolio.
- **Brand framework names exposed as UI.** No `CRAFT` / `BUILDING` / `BUSINESS` tags, no pillar labels, no "Operator notes" tagline (the tagline is deferred; brand bible flags it as unloved).
- **"AI expert" / "AI thought leader" framing.** Brand explicitly anti-positioning. Don't reintroduce.
- **Fabricated metrics or anecdotes.** If a number isn't grounded in real data, leave it out.

## Active Work

- **Blue Revision rebuild — on `feat/blue-revision-rebuild` (off `main`, not `preview`), Retain/Improve/Kill/Decide all done.** Kill list fully executed (portfolio.html, projects.html, work.html, playbowldem-reddit.html, script.js, content.txt all deleted). Decide items resolved: Helicopter Game/Plumo/Sony TV Skill promoted to homepage Building entries; ValuePickr Chat + Rizz Messenger hidden (unlinked, not deleted — "incomplete projects" per Vikas); Resume PDF unlinked (positioning conflict with site's AI-native-builder brand — see MEMORY.md). `sitemap.xml` + `llms.txt` both rebuilt clean.
- **Design decision this session:** no standalone `/projects` or `/work` hub page going forward — homepage Building list is the single source of truth (was drifting stale across three separate listings before this cleanup).
- **Still open:** reconcile this branch back into `preview`/`main` before shipping; real browser/visual QA has not happened yet (Chrome extension unavailable both times it was needed).
- Full session-by-session detail: see `MEMORY.md` in this directory.

## Dispatch-specific rules

When invoked via Claude Dispatch (phone, office, travelling):

1. First action: `git status && git branch --show-current`. If not on `preview`, `git checkout preview && git pull --rebase`.
2. Make the edit. Commit + push to `preview`.
3. Reply with: files changed (line counts), one-line summary, Vercel preview URL, and the prompt: "Review and reply `ship` to promote to production, or send more edits."
4. On `ship`: fast-forward `main`, push, return to `preview`.
5. On `revert`: ask which flavor (last commit, or full reset to main), then do it.
6. If ambiguous: ask back via Dispatch. Don't guess for shared-state operations.
7. Always commit before idle. A dropped session shouldn't lose work.
