# vikasmenon.com

Personal site for Vikas Menon. Vanilla HTML + CSS, no build step. **Hosted on GitHub Pages** (confirmed 2026-08-24 via `gh api repos/ssupppp/vikasmenon/pages` — not Vercel, despite what this file used to say).

This file is the project constitution. Every Claude session in this directory reads it. The same rules apply whether you're driving the laptop directly or have been woken by Claude Dispatch from a phone.

## Branch model — CORRECTED 2026-08-24

**There is no Vercel and no live preview/staging deploy.** GitHub Pages is configured to build from `main` only (legacy build type, root path, custom domain `www.vikasmenon.com` via the `CNAME` file). Pushing any other branch — including `preview` — does not deploy anywhere publicly. This file previously claimed a Vercel preview URL pattern; that was never true for this repo and should not be repeated.

- `main` = production, and the **only** branch GitHub Pages serves. Pushing to `main` goes live on vikasmenon.com immediately.
- `preview` = a normal git branch for staging work-in-progress. No public URL. To actually see it: run a local static server (e.g. `python -m http.server` from the repo root) and open `localhost` in a browser — that's the only real "preview" available today.
- **All edits start on `preview`.** Never commit to `main` directly.
- `main` only advances via fast-forward merge from `preview`.
- If a real shareable staging URL is ever wanted, it needs actual setup (e.g. a second GitHub Pages project, Vercel, Netlify) — nothing like that exists yet.

## Verbs

Use the `/vikasmenon` skill, or these verbs in natural language. Either works.

| Verb | What it does |
|---|---|
| `status` | `git status`, current branch, last commits, preview vs main divergence |
| `preview` | Stage + commit on `preview`, push to origin. **No public URL results** — use a local static server to actually look at it. |
| `ship` | Fast-forward `main` from `preview`, push — this is the real, only, production deploy |
| `revert` | Discard local changes, or hard-reset `preview` back to `main` (ask which) |
| `compare` | `git diff main..preview --stat` to see what's pending review |

Full procedure for each verb lives in `~/.claude/skills/vikasmenon/SKILL.md` — that file may still reference Vercel and needs the same correction if/when it's touched.

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

- **NOTHING IS LIVE.** Blue Revision rebuild (Kill list, Decide items, sitemap/llms.txt cleanup, two design passes) is on `preview`: one commit pushed to origin, plus further uncommitted changes (hero removal, Building reorder, section-transition fix, compact featured essay, this doc's GitHub Pages correction). GitHub Pages only serves `main` — none of it has shipped. Do not describe this work as live until `ship` (fast-forward `main` from `preview`, push) actually happens.
- **Design decision this session:** no standalone `/projects` or `/work` hub page going forward — homepage Building list is the single source of truth (was drifting stale across three separate listings before this cleanup).
- **Next:** commit the current uncommitted round, get real thumbnail images for 6 Building items (2 — Plumo/Helicopter Game — are ready to wire up now, assets already exist), then `ship` when Vikas is ready. Mobile visual QA still outstanding — never confirmed via a real screenshot, only code review.
- Full session-by-session detail: see `MEMORY.md` in this directory.

## Dispatch-specific rules

When invoked via Claude Dispatch (phone, office, travelling):

1. First action: `git status && git branch --show-current`. If not on `preview`, `git checkout preview && git pull --rebase`.
2. Make the edit. Commit + push to `preview`.
3. Reply with: files changed (line counts), one-line summary, and the prompt: "Review and reply `ship` to promote to production, or send more edits." **There is no preview URL to share** — pushing to `preview` doesn't deploy anywhere (GitHub Pages only serves `main`). If Vikas needs to see it from a phone, that's a real gap — flag it rather than inventing a link.
4. On `ship`: fast-forward `main`, push, return to `preview`.
5. On `revert`: ask which flavor (last commit, or full reset to main), then do it.
6. If ambiguous: ask back via Dispatch. Don't guess for shared-state operations.
7. Always commit before idle. A dropped session shouldn't lose work.
