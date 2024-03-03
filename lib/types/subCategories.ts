/* export interface IDropDown {
  title: string;
  url?: string;
  subtitles: string[];
} */

export interface ICategory {
  category: string;
  icon: string;
  subCategories?: ICategory[] | undefined;
}
