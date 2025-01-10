import { createReducer, on } from '@ngrx/store';
import * as MakesActions from '../actions/makes.actions';
import { VehicleMake } from '../../pages/interfaces/vehicle.interface';

/**
 * Interfaz del estado relacionado a las marcas.
 */
export interface MakesState {
  makes: VehicleMake[]; // Lista de marcas de vehículos
  loading: boolean; // Indica si se están cargando las marcas
  error: string | null; // Detalle del error o null si no hay error
}

/**
 * Estado inicial para las marcas.
 */
const initialState: MakesState = {
  makes: [], // Inicialmente la lista de marcas está vacía
  loading: false, // No hay carga en proceso al inicio
  error: null // No hay error al inicio
};

/**
 * Reducer que gestiona las acciones para cargar la lista de marcas.
 */
export const makesReducer = createReducer(
  initialState,

  // Al iniciar la carga, se pone loading en true y error en null.
  on(MakesActions.loadMakes, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  // Si se cargan con éxito, se actualiza la lista de marcas y se desactiva loading.
  on(MakesActions.loadMakesSuccess, (state, { makes }) => ({
    ...state,
    makes,
    loading: false
  })),

  // Si ocurre un error, se registra en el estado y se desactiva loading.
  on(MakesActions.loadMakesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
