import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MakesState } from '../reducers/makes.reducer';
import { VehicleMake } from '../../pages/interfaces/vehicle.interface';

/**
 * Selector base para acceder al estado de 'makes'.
 */
export const selectMakesState = createFeatureSelector<MakesState>('makes');

/**
 * Selector para obtener la lista de marcas.
 * @returns VehicleMake[] - Array de marcas de vehículos.
 */
export const selectAllMakes = createSelector(
  selectMakesState,
  (state: MakesState): VehicleMake[] => state.makes
);

/**
 * Selector para saber si se está cargando la lista de marcas.
 * @returns boolean
 */
export const selectMakesLoading = createSelector(
  selectMakesState,
  (state: MakesState): boolean => state.loading
);

/**
 * Selector para un posible error al cargar las marcas.
 * @returns string | null - Detalle del error o null si no hay error.
 */
export const selectMakesError = createSelector(
  selectMakesState,
  (state: MakesState): string | null => state.error
);
