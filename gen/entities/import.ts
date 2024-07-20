import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-entities.json";
import { EnumValue } from "../../src/enums";
import { Builder } from "../base/builder";
import assert from "assert";

export function generateFromEntities(builder: Builder) {
  const entitiesEnum = builder.enums["entitytype"];
  assert(entitiesEnum !== undefined, "no entities enum");

  const nvalues = data.data_items
    .filter((item) =>
      !entitiesEnum.values.some((e) => e.value === item.name),
    )
    .map((item) => {
      return { 
        value: item.name,
        documentation: `enum.${entitiesEnum.name}.${item.name.toLowerCase()}`
      } as EnumValue;
    });
  console.log(`adding ${nvalues.length} more entities`);
  entitiesEnum.values.push(...nvalues);
}
