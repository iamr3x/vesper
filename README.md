# Vesper

An eye-friendly dark/light theme for Zed and VS Code. Designed for long coding sessions: values use warm colors (green, amber), structure uses cool colors (purple, blue, teal), identifiers stay neutral. WCAG AAA contrast on dark, AA on light.

## Variants

| | Background | Accent |
|---|---|---|
| **Vesper Dark** | `#1e1e2e` near-black navy | purple · blue · teal |
| **Vesper Light** | `#eff1f5` warm off-white | purple · blue · teal |

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
| Background | `#1e1e2e` | `#eff1f5` |
| Foreground (identifiers) | `#cdd6f4` | `#4c4f69` |
| Keyword | `#cba6f7` | `#8839ef` |
| Function | `#89b4fa` | `#1e66f5` |
| Type | `#94e2d5` | `#179299` |
| String | `#a6e3a1` | `#40a02b` |
| Number | `#f9e2af` | `#df8e1d` |
| Comment | `#9399b2` | `#9ca0b0` |

## Customization

Colors live in `src/palette.ts`. Edit and regenerate:

```bash
npm run generate
```

This writes `themes/vesper.json` (Zed) and `themes/vesper-*-color-theme.json` (VS Code).
