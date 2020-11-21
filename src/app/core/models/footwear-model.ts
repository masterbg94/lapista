export interface FootwearModel {
  id?: number;
  image: string;
  name: string;
  price: number;
  colors: Color[];
  sizes?: Size[];
  heelSizes?: HeelSize[];
  description: string;
}

export interface Size {
  sizeNumber?: number;
  // available?: boolean;
}

export interface HeelSize {
  heelSizeNumber?: number;
  // available?: boolean;
}

export interface Color {
  colorValue: string;
  colorName: string;
}
