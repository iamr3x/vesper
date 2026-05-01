import type { Palette } from "./palette"

interface TokenColor {
  scope: string | string[]
  settings: { foreground?: string; fontStyle?: string }
}

export interface VscodeTheme {
  name: string
  type: "dark" | "light"
  colors: Record<string, string>
  tokenColors: TokenColor[]
}

export function buildVscodeTheme(
  name: string,
  type: "dark" | "light",
  p: Palette
): VscodeTheme {
  const activeLine = type === "dark" ? "#ffffff0d" : "#00000008"

  return {
    name,
    type,
    colors: {
      "editor.background":                         p.bg,
      "editor.foreground":                         p.fg,
      "editorLineNumber.foreground":               p.line_number,
      "editorLineNumber.activeForeground":         p.fg_muted,
      "editor.selectionBackground":                p.fn + "40",
      "editor.inactiveSelectionBackground":        p.fn + "20",
      "editor.lineHighlightBackground":            activeLine,
      "editorCursor.foreground":                   p.fg,
      "editorWhitespace.foreground":               p.fg_muted + "50",
      "editorIndentGuide.background1":             p.border,
      "editorIndentGuide.activeBackground1":       p.fg_muted,
      "editor.findMatchBackground":                p.type + "50",
      "editor.findMatchHighlightBackground":       p.type + "30",
      "editorBracketMatch.background":             p.fn + "30",
      "editorBracketMatch.border":                 p.fn,
      "sideBar.background":                        p.bg_elevated,
      "sideBar.foreground":                        p.fg,
      "sideBar.border":                            p.border,
      "sideBarTitle.foreground":                   p.fg_muted,
      "activityBar.background":                    p.bg_elevated,
      "activityBar.foreground":                    p.fg,
      "activityBar.inactiveForeground":            p.fg_muted,
      "activityBar.border":                        p.border,
      "statusBar.background":                      p.bg_elevated,
      "statusBar.foreground":                      p.fg,
      "statusBar.border":                          p.border,
      "titleBar.activeBackground":                 p.bg_elevated,
      "titleBar.activeForeground":                 p.fg,
      "titleBar.border":                           p.border,
      "tab.activeBackground":                      p.bg_surface,
      "tab.inactiveBackground":                    p.bg,
      "tab.activeForeground":                      p.fg,
      "tab.inactiveForeground":                    p.fg_muted,
      "tab.border":                                p.border,
      "panel.background":                          p.bg_elevated,
      "panel.border":                              p.border,
      "terminal.background":                       p.bg_elevated,
      "terminal.foreground":                       p.fg,
      "terminal.ansiBlack":                        p.bg_surface,
      "terminal.ansiRed":                          p.tag,
      "terminal.ansiGreen":                        p.comment,
      "terminal.ansiYellow":                       p.parameter,
      "terminal.ansiBlue":                         p.fn,
      "terminal.ansiMagenta":                      p.keyword,
      "terminal.ansiCyan":                         p.operator,
      "terminal.ansiWhite":                        p.fg,
      "terminal.ansiBrightBlack":                  p.fg_muted,
      "terminal.ansiBrightRed":                    p.tag,
      "terminal.ansiBrightGreen":                  p.comment,
      "terminal.ansiBrightYellow":                 p.parameter,
      "terminal.ansiBrightBlue":                   p.fn,
      "terminal.ansiBrightMagenta":                p.keyword,
      "terminal.ansiBrightCyan":                   p.operator,
      "terminal.ansiBrightWhite":                  p.fg,
      "input.background":                          p.bg_surface,
      "input.foreground":                          p.fg,
      "input.border":                              p.border,
      "focusBorder":                               p.fn,
      "selection.background":                      p.fn + "40",
      "list.activeSelectionBackground":            p.bg_surface,
      "list.activeSelectionForeground":            p.fg,
      "list.hoverBackground":                      p.bg_surface + "80",
      "list.focusBackground":                      p.bg_surface,
      "scrollbarSlider.background":                p.fg_muted + "50",
      "scrollbarSlider.hoverBackground":           p.fg_muted + "80",
      "scrollbarSlider.activeBackground":          p.fg_muted,
      "button.background":                         p.fn,
      "button.foreground":                         p.bg,
      "badge.background":                          p.fn,
      "badge.foreground":                          p.bg,
      "gitDecoration.addedResourceForeground":     p.type,
      "gitDecoration.modifiedResourceForeground":  p.parameter,
      "gitDecoration.deletedResourceForeground":   p.tag,
      "gitDecoration.untrackedResourceForeground": p.type,
      "gitDecoration.ignoredResourceForeground":   p.fg_muted,
      "editorError.foreground":                    p.tag,
      "editorWarning.foreground":                  p.string,
      "editorInfo.foreground":                     p.type,
      "editorGutter.addedBackground":              p.type,
      "editorGutter.modifiedBackground":           p.parameter,
      "editorGutter.deletedBackground":            p.tag,
    },
    tokenColors: [
      {
        scope: ["comment", "comment.line", "comment.block"],
        settings: { foreground: p.comment, fontStyle: "italic" },
      },
      {
        scope: ["keyword", "keyword.control", "keyword.other"],
        settings: { foreground: p.keyword },
      },
      {
        scope: ["storage.type", "storage.modifier"],
        settings: { foreground: p.keyword },
      },
      {
        scope: ["keyword.operator"],
        settings: { foreground: p.operator },
      },
      {
        scope: ["entity.name.function", "support.function"],
        settings: { foreground: p.fn, fontStyle: "italic" },
      },
      {
        scope: ["entity.name.type", "entity.name.class", "support.class", "support.type"],
        settings: { foreground: p.type },
      },
      {
        scope: ["string.quoted", "string.template", "string"],
        settings: { foreground: p.string },
      },
      {
        scope: ["string.regexp"],
        settings: { foreground: p.string_escape },
      },
      {
        scope: ["constant.character.escape"],
        settings: { foreground: p.string_escape },
      },
      {
        scope: ["constant.numeric", "constant.language"],
        settings: { foreground: p.number },
      },
      {
        scope: ["variable.parameter"],
        settings: { foreground: p.parameter },
      },
      {
        scope: ["variable.other.constant", "constant.other"],
        settings: { foreground: p.number },
      },
      {
        scope: ["entity.name.tag", "support.class.component"],
        settings: { foreground: p.tag },
      },
      {
        scope: ["entity.other.attribute-name"],
        settings: { foreground: p.number },
      },
      {
        scope: ["meta.object-literal.key", "variable.other.property", "support.variable.property"],
        settings: { foreground: p.property },
      },
      {
        scope: ["punctuation.definition.string"],
        settings: { foreground: p.string },
      },
      {
        scope: ["punctuation.bracket", "meta.brace"],
        settings: { foreground: p.fn },
      },
      {
        scope: ["punctuation.separator", "punctuation.terminator"],
        settings: { foreground: p.fg_muted },
      },
      {
        scope: ["markup.heading"],
        settings: { foreground: p.fg, fontStyle: "bold" },
      },
      {
        scope: ["markup.italic"],
        settings: { foreground: p.tag, fontStyle: "italic" },
      },
      {
        scope: ["markup.bold"],
        settings: { foreground: p.tag, fontStyle: "bold" },
      },
      {
        scope: ["markup.inline.raw", "markup.fenced_code"],
        settings: { foreground: p.type },
      },
    ],
  }
}
