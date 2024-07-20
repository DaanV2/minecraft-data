import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-dimensions.json";
import { EnumValue } from "../../src/enums";
import { Builder } from "../base/builder";
import assert from "assert";

export function generateFromDimenions(builder: Builder) {
  const dimenionsEnum = builder.enums["dimension"];
  assert(dimenionsEnum !== undefined, "no dimenions enum");

  const nvalues = data.data_items
    .filter((item) =>
      !dimenionsEnum.values.some((e) => e.value === item.name),
    )
    .map((item) => {
      return { 
        value: item.name,
        documentation: `enum.${dimenionsEnum.name}.${item.name.toLowerCase()}`
      } as EnumValue;
    });
  console.log(`adding ${nvalues.length} more dimenions`);
  dimenionsEnum.values.push(...nvalues);
}
