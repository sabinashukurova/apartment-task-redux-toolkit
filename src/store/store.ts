import { configureStore } from '@reduxjs/toolkit';
import advertisementReducer from './AdvertisementSlice'

const store = configureStore({
  reducer: {
    advertisementStore: advertisementReducer
  }
});

export default store;


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch