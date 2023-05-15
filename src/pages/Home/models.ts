import { DropDownSelect } from "../../store/AdvertisementSlice/types";

export enum HomePageFilters {
  SEARCH = 'search',
  PAGE = 'page',
  TYPE = 'type',
  SORT_BY = 'sort_by',
}

export interface ISelectFiltersProps {
  onSortByChange: (e: DropDownSelect) => void,
  onTypeChange: (e: DropDownSelect) => void,
  onReset: () => void,
}