import * as fs from "fs"
import * as path from "path"
import { dark, light } from "./palette"
import { buildZedTheme } from "./zed"
import { buildVscodeTheme } from "./vscode"

const root = path.join(__dirname, "..")
const themesDir = path.join(root, "themes")
fs.mkdirSync(themesDir, { recursive: true })

const zedOutput = {
  $schema: "https://zed.dev/schema/themes/v0.1.0.json",
  name: "Vesper",
  author: "iamr3x",
  themes: [
    buildZedTheme("Vesper Dark", "dark", dark),
    buildZedTheme("Vesper Light", "light", light),
  ],
}
fs.writeFileSync(
  path.join(themesDir, "vesper.json"),
  JSON.stringify(zedOutput, null, 2)
)
console.log("✓ themes/vesper.json")

const darkVscode = {
  $schema: "vscode://schemas/color-theme",
  ...buildVscodeTheme("Vesper Dark", "dark", dark),
}
fs.writeFileSync(
  path.join(themesDir, "vesper-dark-color-theme.json"),
  JSON.stringify(darkVscode, null, 2)
)
console.log("✓ themes/vesper-dark-color-theme.json")

const lightVscode = {
  $schema: "vscode://schemas/color-theme",
  ...buildVscodeTheme("Vesper Light", "light", light),
}
fs.writeFileSync(
  path.join(themesDir, "vesper-light-color-theme.json"),
  JSON.stringify(lightVscode, null, 2)
)
console.log("✓ themes/vesper-light-color-theme.json")
