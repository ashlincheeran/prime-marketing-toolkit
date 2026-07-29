# PRIME Design System

**PRIME Boutique Properties** — a luxury boutique real-estate brand operating in Dubai (listings reference Damac Hills, Dubai Marina, Palm Jumeirah). The brand sells high-end villas and residences and communicates through refined, editorial marketing surfaces: open-house invitations, listing emails, agent-fronted announcements.

**Sources provided** (all in `uploads/`):
- Quiche Sans font family, 14 OTFs (Thin→Black + italics)
- 3 primary logo SVGs (dark / light / white variants)
- 3 brand-guide screenshots: typography spec, color palette, and an open-house invitation layout

No codebase, Figma, or website was provided. Components and UI kit below are derived from the brand guide + invitation screenshot only.

## Brand at a glance
- Logo: "PRIME" wordmark in copper (#CA8342) with "boutique properties" tagline. Never redraw; use `assets/logo-*.svg`.
- Colors: deep navy `#0D1D2C` + copper `#CA8342`. That's the whole palette — restraint is the point.
- Type: **Quiche Sans** for titles and headers only, in **Light / Regular / Medium** weights only — heavier cuts break the luxury feel; **IvyEpic** for all body copy, labels, and UI text. Character tracking 0 on both. When pairing two weights, skip at least one weight (e.g. Light + Medium).

## CONTENT FUNDAMENTALS
- Tone: luxury and personal. Never salesy or exclamatory.
- Voice speaks *to* the reader ("We're Waiting For You", "Sure to attend? Confirm your attendance.") — first-person-plural brand ("we"), second-person reader ("you/your").
- Headlines: title case or all-caps display ("SEE YOU AT THE OPEN HOUSE IN"). Location names get copper Quiche Sans emphasis. **Italics: use sparingly — not as a default emphasis treatment.**
- Body copy: complete, descriptive sentences rich with concrete luxury detail — "double-height ceilings, a private pool, jacuzzi, roof terrace, and smart home tech, fully furnished and move-in ready."
- Attribution matters: "Exclusively brought to the market by" + named agent with portrait. The agent is the face of the transaction.
- No emoji. No exclamation points. Facts (4 Beds · 5 Baths · 7,600 sq. ft. BUA) presented as quiet labeled stats, not shouted.

## VISUAL FOUNDATIONS
- **Backgrounds**: full-bleed navy `#0D1D2C` for brand surfaces; hero photography at top with a navy overlay/protection panel that content sits on. Light surfaces are plain white (brand-guide pages).
- **Color use**: navy = ground, copper = action & emphasis only (buttons, icons, location names, logo). White text on navy. No gradients except photo-protection scrims (navy → transparent).
- **Type system**: Quiche Sans is for titles and headers only, restricted to Light / Regular / Medium at large sizes; IvyEpic for everything else — body, labels, buttons, captions. Tracking 0; small labels may use wide-tracked caps sparingly. Italics available but reserved — avoid using them broadly.
- **Photography**: warm, golden interior photography — beige/caramel/wood tones that echo the copper accent. Rectangular, square-cornered, arranged in editorial masonry grids with thin white/navy gutters.
- **Corners**: square (0px) for cards and images; buttons ~3px; circular crops only for agent portraits.
- **Borders**: 1px hairlines at low opacity (white @16% on navy) to separate stat blocks; thin vertical rules between inline stats.
- **Shadows**: essentially none on navy surfaces; soft wide shadow only when a card floats on photography.
- **Buttons**: copper fill, white text, small — quiet CTA ("RSVP"). Hover: lighter copper; press: deeper copper. Subtle 160ms ease.
- **Layout**: centered, single-column, generous vertical whitespace; a thin copper vertical center rule runs through the invitation layout as a spine motif.
- **Motion**: minimal — fades and gentle eases only (--ease-luxe, 160–400ms). No bounces.
- **Transparency/blur**: low-opacity white fills (6%) for raised panels on navy; no heavy blur.

## ICONOGRAPHY
- The invitation uses thin-stroke line icons (calendar, clock, map pin, bed, bath, area) — consistent 1.5px-stroke outline style, rendered white on navy or copper for the pin.
- No icon font or SVG set was provided. **Substitute: Lucide (CDN)** — matching thin-stroke outline style. Flagged as a substitution; supply the real icon set if one exists.
- No emoji, ever. Unicode used only for divider middots (·) and rules.
- Logos in `assets/`: `logo-dark.svg` (copper + navy tagline, for light bg), `logo-light.svg`, `logo-white.svg` (for navy bg).

## Index
- `styles.css` — global entry; imports `tokens/{fonts,colors,typography,layout}.css`
- `assets/` — logos (3 SVGs), `assets/fonts/` (Quiche Sans OTFs)
- `guidelines/` — foundation specimen cards (Design System tab)
- `components/core/` — Button, SectionLabel, LocationTag, Stat, StatRow, Divider, AgentCard
- `templates/` — (none yet)
- `SKILL.md` — agent skill entry point

## Intentional additions
- `Icon` usage via Lucide CDN — no icon assets were provided; needed for stats/date rows.

## Caveats
- Interior photography from the invitation screenshot could not be extracted as assets.
