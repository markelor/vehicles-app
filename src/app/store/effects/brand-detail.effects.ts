import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as BrandActions from '../actions/brand-detail.actions';
import { VehiclesService } from '../../services/vehicles.service';
import { VehicleType, Model } from '../../pages/interfaces/vehicle.interface';

@Injectable()
export class BrandDetailEffects {
  // Inyección de dependencias con `inject`
  private actions$ = inject(Actions);
  private vehiclesService = inject(VehiclesService);

  /**
   * Efecto para cargar tipos de vehículos
   */
  loadVehicleTypes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BrandActions.loadVehicleTypes),
      mergeMap(({ makeId }) =>
        this.vehiclesService.getVehicleTypesByMakeId(makeId).pipe(
          map((vehicleTypes: VehicleType[]) =>
            BrandActions.loadVehicleTypesSuccess({ vehicleTypes })
          ),
          catchError((error) =>
            of(BrandActions.loadVehicleTypesFailure({ error: error.message }))
          )
        )
      )
    )
  );

  /**
   * Efecto para cargar modelos
   */
  loadModels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BrandActions.loadModels),
      mergeMap(({ makeId }) =>
        this.vehiclesService.getModelsByMakeId(makeId).pipe(
          map((models: Model[]) =>
            BrandActions.loadModelsSuccess({ models })
          ),
          catchError((error) =>
            of(BrandActions.loadModelsFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
