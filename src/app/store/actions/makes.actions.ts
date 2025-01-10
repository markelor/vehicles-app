// src/app/store/actions/makes.actions.ts

import { createAction, props } from '@ngrx/store';
import { VehicleMake } from '../../pages/interfaces/vehicle.interface';

/**
 * Acción para cargar todas las marcas de vehículos.
 */
export const loadMakes = createAction('[Makes] Load Makes');

/**
 * Acción para indicar que las marcas se cargaron exitosamente.
 * @property makes - Arreglo de marcas de vehículos.
 */
export const loadMakesSuccess = createAction(
  '[Makes] Load Makes Success',
  props<{ makes: VehicleMake[] }>() // Tipado explícito
);

/**
 * Acción para indicar que hubo un error al cargar las marcas.
 * @property error - Detalle del error.
 */
export const loadMakesFailure = createAction(
  '[Makes] Load Makes Failure',
  props<{ error: string }>()
);
