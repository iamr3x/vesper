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

export const dark: Palette = {
  bg:            "#1a1b2e",
  bg_surface:    "#1f2040",
  bg_elevated:   "#16161e",
  fg:            "#c0caf5",
  fg_muted:      "#565f89",
  keyword:       "#bb9af7",
  fn:            "#7aa2f7",
  type:          "#73daca",
  string:        "#f7c59f",
  string_escape: "#d4a06a",
  comment:       "#a0b890",
  number:        "#ff9e64",
  parameter:     "#e0af68",
  operator:      "#89ddff",
  tag:           "#f7768e",
  border:        "#2a2b3e",
  property:      "#9dbdd4",
  line_number:   "#3b3d57",
}

export const light: Palette = {
  bg:            "#F5F0FF",
  bg_surface:    "#EDE8F8",
  bg_elevated:   "#E4DCFC",
  fg:            "#2D2B55",
  fg_muted:      "#7B7A9E",
  keyword:       "#7C3AED",
  fn:            "#2563EB",
  type:          "#0891B2",
  string:        "#C2410C",
  string_escape: "#9c5a0a",
  comment:       "#3D6B3D",
  number:        "#B45309",
  parameter:     "#92400E",
  operator:      "#1E40AF",
  tag:           "#BE185D",
  border:        "#D4CCF0",
  property:      "#1a6b8a",
  line_number:   "#9e9cc0",
}
