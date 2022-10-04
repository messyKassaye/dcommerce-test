import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filterSlice from './features/filterSlice';
import { filterCoreApi } from './services/filterCoreApi';

export const store = configureStore({
  reducer: {
    [filterCoreApi.reducerPath]:filterCoreApi.reducer,
    filter:filterSlice
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(filterCoreApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
