import { MouseEventHandler } from 'react';

export interface ButtonProps {
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  rightIcon?: string;
  textStyles?: string;
  title: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  title: string;
  options: OptionProps[];
}

export interface HomeProps {
  searchParams: SearchProps;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface SearchProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
