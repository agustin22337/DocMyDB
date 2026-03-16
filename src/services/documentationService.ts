import { writeFileSync, mkdirSync } from "node:fs"
import { Schema } from "../model/Schema"
import { MarkdownGenerator } from "../generators/markdownGenerator"

type DocType = "markdown"

const generators = {
  markdown: new MarkdownGenerator()
}

export class DocumentationService {

  generateDoc(schema: Schema, type: DocType, outputPath: string) {

    const generator = generators[type]

    if (!generator) {
      throw new Error(`Generator for type '${type}' not found`)
    }

    const content = generator.generate(schema)

    // crear carpeta si no existe
    const folder = outputPath.split("/").slice(0, -1).join("/")
    if (folder) {
      mkdirSync(folder, { recursive: true })
    }

    writeFileSync(outputPath, content)

    console.log(`Documentation generated at: ${outputPath}`)
  }

}