import * as data from "../../bedrock-samples/metadata/vanilladata_modules/mojang-camera-presets.json";
import { EnumValue } from "../../src/enums";
import { Builder } from "../base/builder";
import assert from "assert";

export function generateFromCameraPresets(builder: Builder) {
  const cameraPresetsEnum = builder.enums["camerapresets"];
  assert(cameraPresetsEnum !== undefined, "no camerapresets enum");

  const nvalues = data.data_items
    .filter((item) =>
      !cameraPresetsEnum.values.some((e) => e.value === item.name),
    )
    .map((item) => {
      return { 
        value: item.name,
        documentation: `enum.${cameraPresetsEnum.name.toLowerCase()}.${item.name.toLowerCase()}`
      } as EnumValue;
    });
  console.log(`adding ${nvalues.length} more camerapresets`);
  cameraPresetsEnum.values.push(...nvalues);
}
