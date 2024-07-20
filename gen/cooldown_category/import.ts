import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-cooldown-category.json";
import { Enum, EnumValue } from "../../src/enums";
import { Builder } from "../base/builder";

export function generateFromCooldownCategory(builder: Builder) {
  const cooldownCategory: Enum = {
    name: "cooldowncategory",
    documentation: "enum.cooldowncategory.description",
    values: [],
  };
  builder.enums["cooldowncategory"] = cooldownCategory;

  cooldownCategory.values = data.data_items.map((item) => {
    return {
      value: item.name,
      documentation: `enum.${cooldownCategory.name.toLowerCase()}.${item.name.toLowerCase()}`,
    } as EnumValue;
  });
  console.log(`adding ${cooldownCategory.values.length} more cooldowncategory`);
}
