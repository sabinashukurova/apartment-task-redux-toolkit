import { AxiosError } from "axios";

export interface IFilters {
  search: string;
  sort_by: string;
  type: string;
  page: number;
}

export interface IAdvertisementItemsStore {
  items: AdvertisementStore[];
  isLoading: boolean;
  total: number;
  filters: IFilters;
  searchError?: AxiosError;
  abortController?: AbortController;
}

interface AdvertisementStore {
  id: number,
  thumb: string,
  price: number,
  location: {
    street: string,
    city: string,
    country: string,
  },
  dateAdded: string,
  // extraInformation: string[],
  type: string,
}

export default AdvertisementStore;

export interface DropDownSelect {
  label: string;
  value: string;
  param: string;
}

type AdvertisementItemsSearchResponseItem = {
  id: number,
  thumb: string,
  price: number,
  street: string,
  city: string,
  country: string,
  // extra_information: string[],
  date_added: string,
  type: string,
}

export type {AdvertisementItemsSearchResponseItem}