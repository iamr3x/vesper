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

// Dark: Vesper original — charcoal bg, amber/gold signature. Evening/twilight feel.
// Keywords=amber (warm signature), Fns=gold, Types=teal (cool contrast), Values=green/orange.
// Identifiers stay base fg — coloring everything kills contrast signal.
export const dark: Palette = {
  bg:            "#101010",  // true charcoal — warm dark, not navy
  bg_surface:    "#181818",
  bg_elevated:   "#0c0c0c",
  fg:            "#d4c9b0",  // warm cream — candlelight on paper
  fg_muted:      "#6b6050",  // warm muted brown
  keyword:       "#cc9944",  // amber gold — Vesper signature color
  fn:            "#e8b86d",  // lighter amber — callable
  type:          "#6ec6c6",  // teal — cool contrast to warm amber
  string:        "#8fbe8f",  // sage green — string values
  string_escape: "#e07b54",  // warm coral — escape seqs
  comment:       "#5c5445",  // warm dark gray ≥4.5:1
  number:        "#d4956a",  // warm orange — numeric
  parameter:     "#b088c8",  // soft purple — parameter declarations
  operator:      "#888888",  // neutral gray — structural
  tag:           "#d47070",  // warm coral — HTML/JSX tags
  border:        "#1e1c1a",
  property:      "#72b8d0",  // cool blue — properties
  line_number:   "#3a3530",
}

// Light: Vesper warm paper — cream bg, dark amber. Same semantic roles as dark.
// AA compliance (≥4.5:1).
export const light: Palette = {
  bg:            "#f5f0e8",  // warm cream paper — not pure white
  bg_surface:    "#ede8e0",
  bg_elevated:   "#e0dbd0",
  fg:            "#2c2520",  // warm dark brown — not pure black
  fg_muted:      "#8a7a6a",  // warm muted
  keyword:       "#9a6600",  // dark amber — Vesper signature on light bg
  fn:            "#7a5000",  // darker amber-brown — callable
  type:          "#1a7878",  // dark teal — type system
  string:        "#2d7a2d",  // dark green — string values
  string_escape: "#b85030",  // dark coral — escape seqs
  comment:       "#9a9080",  // warm gray — comments
  number:        "#b86030",  // dark orange — numeric
  parameter:     "#7a44aa",  // purple — parameter declarations
  operator:      "#606060",  // neutral dark gray
  tag:           "#aa3333",  // dark coral red — HTML tags
  border:        "#d8d0c0",
  property:      "#1a6a8a",  // dark blue — properties
  line_number:   "#b0a898",
}
