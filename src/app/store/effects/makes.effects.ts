import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import * as MakesActions from '../actions/makes.actions';
import { VehiclesService } from '../../services/vehicles.service';

@Injectable()
export class MakesEffects {
  /**
   * Inyección de dependencias usando `inject()`.
   */
  private actions$ = inject(Actions);
  private vehiculosService = inject(VehiclesService);

  /**
   * Efecto para cargar las marcas.
   * Escucha la acción 'loadMakes' y llama al servicio para obtener las marcas.
   * Emite 'loadMakesSuccess' o 'loadMakesFailure' según corresponda.
   */
  loadMakes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MakesActions.loadMakes),
      mergeMap(() =>
        this.vehiculosService.getAllMakes().pipe(
          map((makes) => {
            return MakesActions.loadMakesSuccess({ makes });
          }),
          catchError((error) => {
            return of(MakesActions.loadMakesFailure({ error: error.message }));
          })
        )
      )
    )
  );
}
