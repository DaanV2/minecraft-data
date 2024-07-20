import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-items.json";
import { EnumValue } from "../../src/enums";
import { Builder } from "../base/builder";
import assert from "assert";

export function generateFromItems(builder: Builder) {
  const featuresEnum = builder.enums["item"];
  assert(featuresEnum !== undefined, "no items enum");

  const nvalues = data.data_items
    .filter((item) => !featuresEnum.values.some((e) => e.value === item.name))
    .map((item) => {
      return {
        value: item.name,
        documentation: `enum.${featuresEnum.name.toLowerCase()}.${item.name.toLowerCase()}`,
      } as EnumValue;
    });
  console.log(`adding ${nvalues.length} more items`);
  featuresEnum.values.push(...nvalues);
}
