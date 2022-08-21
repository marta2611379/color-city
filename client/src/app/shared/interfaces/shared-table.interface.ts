export interface IColData {
  field: string;
  header: string;
}

export interface IButtonData {
  text: string;
  method: string;
  class?: string;
  disabled?: boolean;
}

export interface ISvgData {
  svgDisplay: boolean;
  svgIcon: string;
  tooltip?: string;
  class?: string;
  method?: string;
}

export interface IRadioButton {
  radioDisplay: boolean;
  method?: string;
}
