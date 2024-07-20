// auto-generated

import { EnumHandler } from "./interface";
import { NonFunctionPropertyNames } from "../util/types";
import { allowListActionEnum } from "./allow-list-action.auto";
import { cameraPresetsEnum } from "./camera-presets.auto";
import { easingEnum } from "./easing.auto";
import { cameraShakeTypeEnum } from "./camera-shake-type.auto";
import { booleanEnum } from "./boolean.auto";
import { difficultyEnum } from "./difficulty.auto";
import { itemEnum } from "./item.auto";
import { maskModeEnum } from "./mask-mode.auto";
import { cloneModeEnum } from "./clone-mode.auto";
import { blockEnum } from "./block.auto";
import { damageCauseEnum } from "./damage-cause.auto";
import { effectEnum } from "./effect.auto";
import { enchantEnum } from "./enchant.auto";
import { entityEventsEnum } from "./entity-events.auto";
import { dimensionEnum } from "./dimension.auto";
import { actorLocationEnum } from "./actor-location.auto";
import { option_If_UnlessEnum } from "./option_if_unless.auto";
import { blocksScanModeEnum } from "./blocks-scan-mode.auto";
import { fillModeEnum } from "./fill-mode.auto";
import { deleteOperationEnum } from "./delete-operation.auto";
import { gameModeEnum } from "./game-mode.auto";
import { boolGameRuleEnum } from "./bool-game-rule.auto";
import { intGameRuleEnum } from "./int-game-rule.auto";
import { commandNameEnum } from "./command-name.auto";
import { hudVisibilityEnum } from "./hud-visibility.auto";
import { hudElementEnum } from "./hud-element.auto";
import { permissionEnum } from "./permission.auto";
import { stateEnum } from "./state.auto";
import { structureEnum } from "./structure.auto";
import { biomeEnum } from "./biome.auto";
import { toolEnum } from "./tool.auto";
import { entityEquipmentSlotEnum } from "./entity-equipment-slot.auto";
import { mobEventEnum } from "./mob-event.auto";
import { musicRepeatModeEnum } from "./music-repeat-mode.auto";
import { permissionsActionEnum } from "./permissions-action.auto";
import { exportTypesEnum } from "./export-types.auto";
import { unlockableRecipeValuesEnum } from "./unlockable-recipe-values.auto";
import { replaceModeEnum } from "./replace-mode.auto";
import { teleportRulesEnum } from "./teleport-rules.auto";
import { fillTypeEnum } from "./fill-type.auto";
import { entityTypeEnum } from "./entity-type.auto";
import { rideRulesEnum } from "./ride-rules.auto";
import { saveModeEnum } from "./save-mode.auto";
import { scoreboardDisplaySlotSortableEnum } from "./scoreboard-display-slot-sortable.auto";
import { scoreboardSortOrderEnum } from "./scoreboard-sort-order.auto";
import { scoreboardPlayersNumActionEnum } from "./scoreboard-players-num-action.auto";
import { redirectLocationEnum } from "./redirect-location.auto";
import { setBlockModeEnum } from "./set-block-mode.auto";
import { structureSaveModeEnum } from "./structure-save-mode.auto";
import { rotationEnum } from "./rotation.auto";
import { mirrorEnum } from "./mirror.auto";
import { structureAnimationModeEnum } from "./structure-animation-mode.auto";
import { tagChangeActionEnum } from "./tag-change-action.auto";
import { testForBlocksModeEnum } from "./test-for-blocks-mode.auto";
import { timeSpecEnum } from "./time-spec.auto";
import { timeQueryEnum } from "./time-query.auto";
import { titleSetEnum } from "./title-set.auto";
import { titleRawSetEnum } from "./title-raw-set.auto";
import { weatherTypeEnum } from "./weather-type.auto";
import { cooldowncategoryEnum } from "./cooldowncategory.auto";
import { featureEnum } from "./feature.auto";

/** The types of enum available */
export type EnumType = NonFunctionPropertyNames<typeof Enums>;

/** The enum handlers */
export namespace Enums {
  export const allowlistaction = allowListActionEnum;
  export const camerapresets = cameraPresetsEnum;
  export const easing = easingEnum;
  export const camerashaketype = cameraShakeTypeEnum;
  export const boolean = booleanEnum;
  export const difficulty = difficultyEnum;
  export const item = itemEnum;
  export const maskmode = maskModeEnum;
  export const clonemode = cloneModeEnum;
  export const block = blockEnum;
  export const damagecause = damageCauseEnum;
  export const effect = effectEnum;
  export const enchant = enchantEnum;
  export const entityevents = entityEventsEnum;
  export const dimension = dimensionEnum;
  export const actorlocation = actorLocationEnum;
  export const option_if_unless = option_If_UnlessEnum;
  export const blocksscanmode = blocksScanModeEnum;
  export const fillmode = fillModeEnum;
  export const deleteoperation = deleteOperationEnum;
  export const gamemode = gameModeEnum;
  export const boolgamerule = boolGameRuleEnum;
  export const intgamerule = intGameRuleEnum;
  export const commandname = commandNameEnum;
  export const hudvisibility = hudVisibilityEnum;
  export const hudelement = hudElementEnum;
  export const permission = permissionEnum;
  export const state = stateEnum;
  export const structure = structureEnum;
  export const biome = biomeEnum;
  export const tool = toolEnum;
  export const entityequipmentslot = entityEquipmentSlotEnum;
  export const mobevent = mobEventEnum;
  export const musicrepeatmode = musicRepeatModeEnum;
  export const permissionsaction = permissionsActionEnum;
  export const exporttypes = exportTypesEnum;
  export const unlockablerecipevalues = unlockableRecipeValuesEnum;
  export const replacemode = replaceModeEnum;
  export const teleportrules = teleportRulesEnum;
  export const filltype = fillTypeEnum;
  export const entitytype = entityTypeEnum;
  export const riderules = rideRulesEnum;
  export const savemode = saveModeEnum;
  export const scoreboarddisplayslotsortable =
    scoreboardDisplaySlotSortableEnum;
  export const scoreboardsortorder = scoreboardSortOrderEnum;
  export const scoreboardplayersnumaction = scoreboardPlayersNumActionEnum;
  export const redirectlocation = redirectLocationEnum;
  export const setblockmode = setBlockModeEnum;
  export const structuresavemode = structureSaveModeEnum;
  export const rotation = rotationEnum;
  export const mirror = mirrorEnum;
  export const structureanimationmode = structureAnimationModeEnum;
  export const tagchangeaction = tagChangeActionEnum;
  export const testforblocksmode = testForBlocksModeEnum;
  export const timespec = timeSpecEnum;
  export const timequery = timeQueryEnum;
  export const titleset = titleSetEnum;
  export const titlerawset = titleRawSetEnum;
  export const weathertype = weatherTypeEnum;
  export const cooldowncategory = cooldowncategoryEnum;
  export const feature = featureEnum;

  /**
   * Get an enum handler by type
   * @param type The type of enum to get
   * @returns The enum handler
   */
  export function get(type: EnumType): EnumHandler {
    return Enums[type];
  }
}
