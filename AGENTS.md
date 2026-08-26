# VoiceOpenGov agent contract

## Brand / CI is human-locked

VoiceOpenGov belongs to the same visual product family as eDebatte. The public movement may use a more human, campaign-oriented composition, but it must not introduce an independent color system or silently redefine the family identity.

### Canonical family palette

- Deep background: `#020617`
- Raised dark surface: `#0b1220`
- Primary blue: `#1a8cff`
- Primary cyan/turquoise: `#18cfc8`
- Primary light text: `#f8fafc`
- Primary dark text on bright CTA: `#071727`

The canonical compatibility layer is `apps/web/public/edebatte-ci.css`.

### Forbidden autonomous changes

Agents MUST NOT, without explicit human acceptance:

- redefine the canonical palette, typography or logo language;
- introduce a new dominant brand color or a replacement palette;
- turn VoiceOpenGov into a visually unrelated brand;
- remove or bypass the eDebatte family compatibility layer;
- replace shared brand tokens with hard-coded page-specific brand colors;
- describe a visual redesign as a harmless closing pass, cleanup or refactor.

A requested layout, UX, accessibility, responsive or content improvement does NOT grant permission to change the brand identity.

### Human acceptance gate

Any intended brand change must be called out explicitly as a `BRAND/CI CHANGE` in the PR description and must receive human acceptance before merge. Silence is not acceptance.

## Internationalization is a launch contract

Language selection must change the complete public experience, not only client components. Header, page content, footer, privacy/cookie UI, metadata-relevant server surfaces and RTL direction must stay on one locale after a switch.

Agents MUST NOT add new German-only public copy to a locale-aware surface without either:

1. providing translations for every supported launch locale used by that surface, or
2. using the established locale fallback contract and documenting the fallback honestly.

Changes to locale state, cookie/query synchronization or server/client locale resolution require the existing locale contract tests to remain green.
