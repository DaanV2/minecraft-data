import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-effects.json";
import { EnumValue } from "../../src/enums";
import { Builder } from "../base/builder";
import assert from "assert";

export function generateFromEffects(builder: Builder) {
  const effectsEnum = builder.enums["effect"];
  assert(effectsEnum !== undefined, "no effects enum");

  const nvalues = data.data_items
    .filter((item) =>
      !effectsEnum.values.some((e) => e.value === item.name),
    )
    .map((item) => {
      return { 
        value: item.name,
        documentation: `enum.${effectsEnum.name.toLowerCase()}.${item.name.toLowerCase()}`
      } as EnumValue;
    });
  console.log(`adding ${nvalues.length} more effects`);
  effectsEnum.values.push(...nvalues);
}
