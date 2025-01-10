import { ActionReducerMap } from '@ngrx/store';
import { makesReducer, MakesState } from './makes.reducer';
import { brandDetailReducer } from './brand-detail.reducer';
import { BrandDetailState } from '../../pages/interfaces/vehicle.interface';

/**
 * Interfaz que representa el estado global de la aplicación.
 */
export interface AppState {
  makes: MakesState;
  brandDetail: BrandDetailState;
}

/**
 * Mapa de reducers que conforman el estado global.
 */
export const reducers: ActionReducerMap<AppState> = {
  makes: makesReducer,
  brandDetail: brandDetailReducer
};
