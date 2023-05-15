import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { makeParams } from './utils';
import Advertisement, { AdvertisementItemsSearchResponseItem } from './types';
import baseService from '../../service/baseservice';

interface AdvertisementState {
  defaultFilters: {
    search: string;
    sort_by: string;
    type: string;
    page: number;
  };
  limit: number;
  isLoading: boolean;
  total: number;
  filters: {
    search: string;
    sort_by: string;
    type: string;
    page: number;
  };
  searchError: any;
  items: Advertisement[];
}

const initialState: AdvertisementState = {
  defaultFilters: {
    search: "",
    sort_by: "",
    type: "",
    page: 1,
  },
  limit: 10,
  isLoading: false,
  total: 0,
  filters: {
    search: "",
    sort_by: "",
    type: "",
    page: 1,
  },
  searchError: undefined,
  items: [],
};

export const AdvertisementSlice = createSlice({
  name: 'advertisement',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<{[key: string]: any}>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSearchError: (state, action: PayloadAction<any>) => {
      state.searchError = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setItems: (state, action: PayloadAction<Advertisement[]>) => {
      state.items = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.filters.search = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.filters.page = action.payload
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.filters.sort_by = action.payload
    },
    setType: (state, action: PayloadAction<string>) => {
      state.filters.type = action.payload
    },
    setError: (state, action: PayloadAction<any>) => {
      state.searchError = action.payload
    }
  },
});

export const {
  setFilters,
  setSearchError,
  setLoading,
  setItems,
  setTotal,
  setPage,
  setSearchValue,
  setSortBy,
  setType,
  setError
} = AdvertisementSlice.actions;

export const loadItems = (): any => async (dispatch:any, getState:any) => {
  const { filters, limit } = getState().advertisementStore;

  dispatch(setLoading(true));
  dispatch(setSearchError(undefined));

  const params = makeParams(filters);

  const { data, headers } = await baseService.get<AdvertisementItemsSearchResponseItem[]>('/items', {
    params: {
      ...params,
      '_limit': limit,
    },
  });

  const items = advertisementItemsSearchResponseItemsMapper(data);
  const total = parseInt(headers['x-total-count'] ?? data.length, 10);

  dispatch(setItems(items));
  dispatch(setTotal(total));
  dispatch(setLoading(false));
};

export const advertisementItemsSearchResponseItemsMapper = (data: AdvertisementItemsSearchResponseItem[]): Advertisement[] =>
  data.map((item) => ({
    ...item,
    location: {
      street: item.street,
      city: item.city,
      country: item.country,
    },
    dateAdded: item.date_added,
    // extraInformation: item.extra_information,
  }));

export default AdvertisementSlice.reducer;
