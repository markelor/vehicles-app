import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BrandDetailState, VehicleType, Model } from '../../pages/interfaces/vehicle.interface';

export const selectBrandDetailState = createFeatureSelector<BrandDetailState>('brandDetail');

// Obtener tipos de vehículos
export const selectVehicleTypes = createSelector(
  selectBrandDetailState,
  (state: BrandDetailState): VehicleType[] => state.vehicleTypes
);

// Obtener modelos
export const selectModels = createSelector(
  selectBrandDetailState,
  (state: BrandDetailState): Model[] => state.models
);

// Saber si está cargando
export const selectBrandDetailLoading = createSelector(
  selectBrandDetailState,
  (state: BrandDetailState): boolean => state.loading
);

// Obtener error
export const selectBrandDetailError = createSelector(
  selectBrandDetailState,
  (state: BrandDetailState): string | null => state.error
);
