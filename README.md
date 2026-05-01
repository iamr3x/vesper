# Vesper

A calm dark/light theme for Zed and VS Code — deep navy, sage greens, soft peach.

## Variants

| | Background | Accent |
|---|---|---|
| **Vesper Dark** | `#1a1b2e` deep navy | purple · blue · teal |
| **Vesper Light** | `#F5F0FF` lavender | purple · blue · teal |

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
| Background | `#1a1b2e` | `#F5F0FF` |
| Foreground | `#c0caf5` | `#2D2B55` |
| Keyword | `#bb9af7` | `#7C3AED` |
| Function | `#7aa2f7` | `#2563EB` |
| Type | `#73daca` | `#0891B2` |
| String | `#f7c59f` | `#C2410C` |
| Comment | `#a0b890` | `#3D6B3D` |
| Number | `#ff9e64` | `#B45309` |

## Customization

Colors live in `src/palette.ts`. Edit and regenerate:

```bash
npm run generate
```

This writes `themes/vesper.json` (Zed) and `themes/vesper-*-color-theme.json` (VS Code).
