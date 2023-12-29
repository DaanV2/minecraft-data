import { BlockProperty } from "../../src/block-properties/interface";
import { Block } from "../../src/blocks/interface";
import { Command } from "../../src/commands/interface";
import { Enum } from "../../src/enums/interface";

export interface Builder {
  /** [id]: data */
  enums: Record<string, Enum>;
  /** [id]: data */
  commands: Record<string, Command>;
  /** [id]: data */
  entities: Record<string, any>;
  /** [path]: content */
  files: Record<string, string>;
  /** [id]: data */
  blocks: Record<string, Block>;
  /** [id]: data */
  block_properties: Record<string, BlockProperty>;
}


export namespace Builder {

  export function appendToIndex(builder: Builder, indexFile: string, filepath: string, name?: string) {
    const data = builder.files[indexFile] || "// auto-generated\n\n";

    //append
    const importPath = `"./${filepath}"`;
    const base = name ? 
      `export { ${name} } from `:
      "export * from ";
    
    builder.files[indexFile] = data + `${base}${importPath};\n`;
  }
}