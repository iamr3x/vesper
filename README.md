# Vesper

A vibrant dark/light theme for Zed and VS Code — rich navy, vivid teal, electric cyan.

## Variants

| | Background | Accent |
|---|---|---|
| **Vesper Dark** | `#13141f` deep navy | purple · blue · teal |
| **Vesper Light** | `#f0ebff` lavender | purple · blue · teal |

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

| Role | Dark | Light |
|------|------|-------|
| Background | `#13141f` | `#f0ebff` |
| Foreground | `#cdd6f4` | `#1e1b3a` |
| Keyword | `#d18cff` | `#7c00e6` |
| Function | `#6ab0ff` | `#0050e0` |
| Type | `#3de8c8` | `#007a8a` |
| String | `#ffd580` | `#b83200` |
| Comment | `#6dcf8e` | `#2e7a2e` |
| Number | `#ff9640` | `#c45000` |

## Customization

Colors live in `src/palette.ts`. Edit and regenerate:

```bash
npm run generate
```

This writes `themes/vesper.json` (Zed) and `themes/vesper-*-color-theme.json` (VS Code).
