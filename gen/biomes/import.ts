import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-biomes.json";
import { EnumValue } from "../../src/enums";
import { Builder } from "../base/builder";
import assert from "assert";

export function generateFromBiomes(builder: Builder) {
  const biomeEnum = builder.enums["biome"];
  assert(biomeEnum !== undefined, "no biome enum");

  const nvalues = data.data_items
    .filter((item) => biomeEnum.values.some((e) => e.value === item.name))
    .map((item) => {
      return { value: item.name } as EnumValue;
    });
  console.log(`adding ${nvalues.length} more biomes`);
}
