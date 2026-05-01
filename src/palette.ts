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
  bg:            "#13141f",
  bg_surface:    "#1c1e35",
  bg_elevated:   "#0f1018",
  fg:            "#cdd6f4",
  fg_muted:      "#6272a4",
  keyword:       "#d18cff",
  fn:            "#6ab0ff",
  type:          "#3de8c8",
  string:        "#ffd580",
  string_escape: "#ffb347",
  comment:       "#6dcf8e",
  number:        "#ff9640",
  parameter:     "#f5c842",
  operator:      "#5de4ff",
  tag:           "#ff6b9d",
  border:        "#252740",
  property:      "#6ec6f0",
  line_number:   "#3a3d5c",
}

export const light: Palette = {
  bg:            "#f0ebff",
  bg_surface:    "#e4dcfc",
  bg_elevated:   "#d8ccf8",
  fg:            "#1e1b3a",
  fg_muted:      "#6b68a0",
  keyword:       "#7c00e6",
  fn:            "#0050e0",
  type:          "#007a8a",
  string:        "#b83200",
  string_escape: "#a04800",
  comment:       "#2e7a2e",
  number:        "#c45000",
  parameter:     "#8a3800",
  operator:      "#0038b8",
  tag:           "#c4005e",
  border:        "#c8bef0",
  property:      "#005f8a",
  line_number:   "#8e8ab8",
}
