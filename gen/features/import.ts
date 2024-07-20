import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-features.json";
import { Enum, EnumValue } from "../../src/enums";
import { Builder } from "../base/builder";
import assert from "assert";

export function generateFromFeatures(builder: Builder) {
  const featuresEnum: Enum = {
    name: "feature",
    documentation: "enum.feature.description",
    values: [],
  };
  builder.enums["feature"] = featuresEnum;

  const nvalues = data.data_items
    .filter((item) => !featuresEnum.values.some((e) => e.value === item.name))
    .map((item) => {
      return {
        value: item.name,
        documentation: `enum.${featuresEnum.name}.${item.name.toLowerCase()}`,
      } as EnumValue;
    });
  console.log(`adding ${nvalues.length} more features`);
  featuresEnum.values.push(...nvalues);
}
