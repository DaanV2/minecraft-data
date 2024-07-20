import { Builder } from "./base/builder";
import { generateFromCommands } from "./commands/import";
import { writeFileSync } from "fs";
import { saveEnums } from "./generate-enums";
import { saveCommands } from "./generate-commands";
import { saveBlocks } from "./generate-blocks";
import { generateFromBlocks } from "./blocks/import";
import { generateFromBiomes } from './biomes/import';
import { generateFromCameraPresets } from './camera-presets/import';
import { generateFromCooldownCategory } from './cooldown_category/import';
import { generateFromDimenions } from './dimensions/import';
import { generateFromEffects } from './effects/import';
import { generateFromEnchantments } from './enchantments/import';
import { generateFromEntities } from './entities/import';
import { generateFromFeatures } from './features/import';
import { generateFromItems } from './items/import';

const builder: Builder = {
  commands: {},
  entities: {},
  enums: {},
  files: {},
  block_properties: {},
  blocks: {},
};

// Data
generateFromCommands(builder);
generateFromBlocks(builder);
generateFromBiomes(builder);
generateFromCameraPresets(builder);
generateFromCooldownCategory(builder);
generateFromDimenions(builder);
generateFromEffects(builder);
generateFromEnchantments(builder);
generateFromEntities(builder);
generateFromFeatures(builder);
generateFromItems(builder);

//Commands export
Builder.appendToIndex(builder, "src/commands/index.ts", "interface");
saveCommands(builder);

//Enum export
Builder.appendToIndex(builder, "src/enums/index.ts", "interface");
saveEnums(builder);

//Blocks
saveBlocks(builder);

//Write files
for (const filepath in builder.files) {
  const content = builder.files[filepath];
  writeFileSync(filepath, content);
}
