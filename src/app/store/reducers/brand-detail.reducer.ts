import { createReducer, on } from '@ngrx/store';
import * as BrandActions from '../actions/brand-detail.actions';
import { BrandDetailState } from '../../pages/interfaces/vehicle.interface';



const initialState: BrandDetailState = {
  vehicleTypes: [],
  models: [],
  loading: false,
  error: null,
};

export const brandDetailReducer = createReducer(
  initialState,
  on(BrandActions.loadVehicleTypes, BrandActions.loadModels, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(BrandActions.loadVehicleTypesSuccess, (state, { vehicleTypes }) => ({
    ...state,
    vehicleTypes,
    loading: false,
  })),
  on(BrandActions.loadModelsSuccess, (state, { models }) => ({
    ...state,
    models,
    loading: false,
  })),
  on(BrandActions.loadVehicleTypesFailure, BrandActions.loadModelsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
