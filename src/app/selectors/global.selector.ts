import type { RootState } from '../store';
import type { IGlobalState } from '../store/slices/global/global.types';

/*
 * Global slice
 */
// (Global) Получаем поля слайса
export const getGlobalField =
  <K extends keyof IGlobalState>(field: K) =>
  (state: RootState) =>
    state.globalReducer[field];
