import { writeFileSync } from "fs";
import { runInThisContext } from "vm";

export class FileBuilder {
  public filepath: string;
  public content: string;

  constructor(filepath: string, content?: string) {
    this.filepath = filepath;
    this.content = content ?? "// auto-generated\n\n";
  }

  public append(content: string): this {
    this.content += content;
    return this;
  }

  public appendLine(content: string): this {
    this.append(content + "\n");
    return this;
  }

  public appendLineBreak(): this {
    this.append("\n");
    return this;
  }

  public save(): void {
    writeFileSync(this.filepath, this.content);
  }
}
