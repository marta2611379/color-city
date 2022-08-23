import { Injectable } from '@angular/core';
import {
  AplicationToolsEnum,
  BrilianceEnum,
  ColorsBaseEnum,
  ColorsEnum,
  DryingTimeUnitEnum,
  ProductBaseEnum,
  UnitEnum,
  UsedForMaterialsEnum,
  UseTypesEnum,
} from '../../enums/common.enum';

import { Dictionary } from '../../interfaces/common.interface';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  degree_brilliance: Dictionary<BrilianceEnum> = {
    glossy: BrilianceEnum.glossy,
    semiglossy: BrilianceEnum.semiglossy,
    matt: BrilianceEnum.matt,
    semimatt: BrilianceEnum.semimatt,
    deepmatt: BrilianceEnum.deepmatt,
    silkymatte: BrilianceEnum.silkymatte,
  };

  use_types: Dictionary<UseTypesEnum> = {
    outdoor: UseTypesEnum.outdoor,
    interior: UseTypesEnum.interior,
    universal: UseTypesEnum.universal,
  };

  product_base: Dictionary<ProductBaseEnum> = {
    watersoluble: ProductBaseEnum.watersoluble,
    organosoluble: ProductBaseEnum.organosoluble,
  };

  used_for_materials: Dictionary<UsedForMaterialsEnum> = {
    wallpaper: UsedForMaterialsEnum.wallpaper,
    drywall: UsedForMaterialsEnum.drywall,
    concrete: UsedForMaterialsEnum.concrete,
    glass: UsedForMaterialsEnum.glass,
    wood: UsedForMaterialsEnum.wood,
    metal: UsedForMaterialsEnum.metal,
    plastic: UsedForMaterialsEnum.plastic,
    natural_stone: UsedForMaterialsEnum.natural_stone,
    artificial_stone: UsedForMaterialsEnum.artificial_stone,
  };

  application_tool: Dictionary<AplicationToolsEnum> = {
    platen: AplicationToolsEnum.platen,
    sprayer: AplicationToolsEnum.sprayer,
    paintbrush: AplicationToolsEnum.paintbrush,
    spatula: AplicationToolsEnum.spatula,
  };

  colors: Dictionary<ColorsEnum> = {
    red: ColorsEnum.red,
    green: ColorsEnum.green,
    blue: ColorsEnum.blue,
    black: ColorsEnum.black,
    white: ColorsEnum.white,
    yellow: ColorsEnum.yellow,
    brown: ColorsEnum.brown,
    transparent: ColorsEnum.transparent,
    translucent: ColorsEnum.translucent,
    grey: ColorsEnum.grey,
    ivory: ColorsEnum.ivory,
    silver: ColorsEnum.silver,
    gold: ColorsEnum.gold,
    '#eae0c8': ColorsEnum['#eae0c8'],
    '#00bddd': ColorsEnum['#00bddd'],
    '#e9f6f4': ColorsEnum['#e9f6f4'],
    '#8a8a8a': ColorsEnum['#8a8a8a'],
    '#ba805a': ColorsEnum['#ba805a'],
    '#e49441': ColorsEnum['#e49441'],
    '#8a8a8b': ColorsEnum['#8a8a8b'],
    '#8aaea2': ColorsEnum['#8aaea2'],
    '#686868': ColorsEnum['#686868'],
    '#abb2d4': ColorsEnum['#abb2d4'],
    '#e1e4e7': ColorsEnum['#e1e4e7'],
    beige: ColorsEnum['beige'],
  };

  colors_base: Dictionary<ColorsBaseEnum> = {
    white: ColorsBaseEnum.white,
    translucent: ColorsBaseEnum.translucent,
  };

  unit: Dictionary<UnitEnum> = {
    kg: UnitEnum.kg,
    l: UnitEnum.l,
  };

  drying_time_unit: Dictionary<DryingTimeUnitEnum> = {
    hour: DryingTimeUnitEnum.hour,
    minute: DryingTimeUnitEnum.minute,
  };
}
