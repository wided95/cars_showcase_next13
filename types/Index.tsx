import { MouseEventHandler } from "react";
//Custom Button Props
export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?:string;
  rightIcon?:string;
  isDisabled?:boolean;
}
//Search Manufacturer props
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
//Options
export interface OptionProps{
  title:string;
  value:string;
}
//Search CustomFilter props
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
//Car Card Props
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
  year:number;
}
//Filter 
export interface FilterProps{
  manufacturer: string,
    year: number,
    fuel:string,
    limit:number,
    model:string,
}
//Show more 
export interface ShowMoreProps{
  pageNumber:number;
  isNext:boolean;
}
// Home Props
export interface HomeProps {
  searchParams: FilterProps;
}