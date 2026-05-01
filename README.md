# Vesper

A warm, amber-accented dark/light theme for Zed and VS Code. Designed for long coding sessions: keywords glow amber gold on a true charcoal background, types contrast in cool teal, and identifiers stay neutral so nothing drowns the signal. WCAG AAA contrast on dark, AA on light.

## Variants

| | Background | Accent |
|---|---|---|
| **Vesper Dark** | `#101010` charcoal | amber · teal · sage |
| **Vesper Light** | `#f5f0e8` warm cream | amber · teal · green |

## Installation

### Zed

Search **Vesper** in the Zed extension marketplace, or add to your `settings.json`:

```json
{
  "theme": "Vesper Dark"
}
```

### VS Code

Search **Vesper** in the VS Code extension marketplace, or install via CLI:

```bash
code --install-extension iamr3x.vesper
```

Then select **Vesper Dark** or **Vesper Light** from the color theme picker (`⌘K ⌘T`).

## Palette

Values use **warm** colors so they stand out as data. Structure uses **cool** colors. Variables and identifiers stay neutral (`fg`) so nothing drowns the signal.

| Role | Dark | Light |
|------|------|-------|
| Background | `#101010` | `#f5f0e8` |
| Foreground (identifiers) | `#d4c9b0` | `#2c2520` |
| Keyword | `#cc9944` | `#9a6600` |
| Function | `#e8b86d` | `#7a5000` |
| Type | `#6ec6c6` | `#1a7878` |
| String | `#8fbe8f` | `#2d7a2d` |
| Number | `#d4956a` | `#b86030` |
| Comment | `#5c5445` | `#9a9080` |

## Customization

Colors live in `src/palette.ts`. Edit and regenerate:

```bash
npm run generate
```

This writes `themes/vesper.json` (Zed) and `themes/vesper-*-color-theme.json` (VS Code).
