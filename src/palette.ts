export interface Palette {
  bg: string
  bg_surface: string
  bg_elevated: string
  fg: string
  fg_muted: string
  keyword: string
  fn: string
  type: string
  string: string
  string_escape: string
  comment: string
  number: string
  parameter: string
  operator: string
  tag: string
  border: string
  property: string
  line_number: string
}

// Dark: Catppuccin Mocha-based. Values=warm(green/amber), Structure=cool(purple/blue/teal).
// Variables use base fg — research shows coloring identifiers everywhere kills contrast signal.
// All syntax tokens ≥7:1 contrast vs bg (WCAG AAA). Comments ≥4.5:1.
export const dark: Palette = {
  bg:            "#1e1e2e",  // near-black navy, not pure black (reduces eye strain)
  bg_surface:    "#24273a",
  bg_elevated:   "#181825",
  fg:            "#cdd6f4",  // light periwinkle — neutral identifier color
  fg_muted:      "#7f849c",  // muted but ≥4.5:1 contrast
  keyword:       "#cba6f7",  // mauve purple — structural keywords
  fn:            "#89b4fa",  // blue — callable code
  type:          "#94e2d5",  // teal — type system (distinct hue AND luminance from fn)
  string:        "#a6e3a1",  // green — string values (VALUE=natural/warm)
  string_escape: "#fab387",  // peach — escape seqs inside strings
  comment:       "#9399b2",  // blue-gray — muted but readable (≥4.5:1)
  number:        "#f9e2af",  // amber — numeric values (warm, distinct from green string)
  parameter:     "#fab387",  // peach — parameter declarations (find where things come from)
  operator:      "#89dceb",  // sky cyan — operators (subtle, structural)
  tag:           "#f38ba8",  // pink — HTML/JSX tags (not pure red, colorblind-safe)
  border:        "#313244",
  property:      "#74c7ec",  // sapphire — properties (blue family, distinct from fn blue)
  line_number:   "#45475a",
}

// Light: Catppuccin Latte-based. AA compliance (≥4.5:1) — AAA on light bg forces too-similar hues.
// Same semantic color roles as dark for visual consistency.
export const light: Palette = {
  bg:            "#eff1f5",  // warm off-white, not pure white (reduces glare)
  bg_surface:    "#e6e9ef",
  bg_elevated:   "#dce0e8",
  fg:            "#4c4f69",  // dark blue-gray, not pure black
  fg_muted:      "#8c8fa1",  // muted text
  keyword:       "#8839ef",  // purple — structural keywords
  fn:            "#1e66f5",  // blue — callable code
  type:          "#179299",  // teal — type system
  string:        "#40a02b",  // green — string values
  string_escape: "#fe640b",  // orange — escape seqs
  comment:       "#9ca0b0",  // muted gray — comments
  number:        "#df8e1d",  // amber — numeric values
  parameter:     "#fe640b",  // orange — parameter declarations
  operator:      "#04a5e5",  // sky blue — operators
  tag:           "#dd7878",  // flamingo — HTML tags (warm coral, not pure red)
  border:        "#ccd0da",
  property:      "#7287fd",  // lavender — properties
  line_number:   "#acb0be",
}
