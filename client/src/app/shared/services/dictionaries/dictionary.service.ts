import { Injectable } from '@angular/core';
import {
  AplicationToolsEnum,
  BrilianceEnum,
  ColorsEnum,
  DryingTimeUnitEnum,
  ProductBaseEnum,
  UnitEnum,
  UsedForMaterialsEnum,
  UseTypesEnum,
} from '../../enums/common.enum';
interface Dictionary<T> {
  [Key: string]: T;
}
@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  degree_brilliance: Dictionary<BrilianceEnum> = {
    glossy: BrilianceEnum.glossy,
    matt: BrilianceEnum.matt,
    semimatt: BrilianceEnum.semimatt,
    deepmatt: BrilianceEnum.deepmatt,
  };

  use_types: Dictionary<UseTypesEnum> = {
    outdoor: UseTypesEnum.outdoor,
    interior: UseTypesEnum.interior,
    universal: UseTypesEnum.universal,
  };

  product_base: Dictionary<ProductBaseEnum> = {
    acril: ProductBaseEnum.acril,
    water: ProductBaseEnum.water,
  };

  used_for_materials: Dictionary<UsedForMaterialsEnum> = {
    wallpaper: UsedForMaterialsEnum.wallpaper,
    plaster: UsedForMaterialsEnum.plaster,
    concrete: UsedForMaterialsEnum.concrete,
    brick: UsedForMaterialsEnum.brick,
    wood: UsedForMaterialsEnum.wood,
    metal: UsedForMaterialsEnum.metal,
    plastic: UsedForMaterialsEnum.plastic,
    natural_stone: UsedForMaterialsEnum.natural_stone,
    artificial_stone: UsedForMaterialsEnum.artificial_stone,
  };

  application_tool: Dictionary<AplicationToolsEnum> = {
    platen: AplicationToolsEnum.platen,
    mechanized: AplicationToolsEnum.mechanized,
    paintbrush: AplicationToolsEnum.paintbrush,
  };

  colors: Dictionary<ColorsEnum> = {
    red: ColorsEnum.red,
    green: ColorsEnum.green,
    blue: ColorsEnum.blue,
    black: ColorsEnum.black,
    white: ColorsEnum.white,
    yellow: ColorsEnum.yellow,
    brown: ColorsEnum.brown,
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
