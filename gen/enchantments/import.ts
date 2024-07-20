import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-enchantments.json";
import { EnumValue } from "../../src/enums";
import { Builder } from "../base/builder";
import assert from "assert";

export function generateFromEnchantments(builder: Builder) {
  const enchantmentsEnum = builder.enums["enchant"];
  assert(enchantmentsEnum !== undefined, "no enchantments enum");

  const nvalues = data.data_items
    .filter((item) =>
      !enchantmentsEnum.values.some((e) => e.value === item.name),
    )
    .map((item) => {
      return { 
        value: item.name,
        documentation: `enum.${enchantmentsEnum.name}.${item.name.toLowerCase()}`
      } as EnumValue;
    });
  console.log(`adding ${nvalues.length} more enchantments`);
  enchantmentsEnum.values.push(...nvalues);
}
