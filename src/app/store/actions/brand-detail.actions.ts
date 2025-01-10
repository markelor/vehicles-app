import { createAction, props } from '@ngrx/store';
import { VehicleType, Model } from '../../pages/interfaces/vehicle.interface';

// Tipos de vehículos
export const loadVehicleTypes = createAction(
  '[Brand Detail] Load Vehicle Types',
  props<{ makeId: number }>()
);

export const loadVehicleTypesSuccess = createAction(
  '[Brand Detail] Load Vehicle Types Success',
  props<{ vehicleTypes: VehicleType[] }>()
);

export const loadVehicleTypesFailure = createAction(
  '[Brand Detail] Load Vehicle Types Failure',
  props<{ error: string }>()
);

// Modelos
export const loadModels = createAction(
  '[Brand Detail] Load Models',
  props<{ makeId: number }>()
);

export const loadModelsSuccess = createAction(
  '[Brand Detail] Load Models Success',
  props<{ models: Model[] }>()
);

export const loadModelsFailure = createAction(
  '[Brand Detail] Load Models Failure',
  props<{ error: string }>()
);
