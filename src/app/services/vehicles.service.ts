// src/app/services/vehicles.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Model,VehicleMake, VehicleType } from '../pages/interfaces/vehicle.interface';



/**
 * Servicio para interactuar con la API de NHTSA (vehículos).
 */
@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  /**
   * URL base de la API de NHTSA.
   */
  private baseUrl: string = 'https://vpic.nhtsa.dot.gov/api';

  /**
   * @param http - Cliente HTTP inyectado para realizar peticiones a la API.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Obtiene todas las marcas disponibles en la API.
   * @returns Observable con array de marcas (Make[]).
   */
  getAllMakes(): Observable<VehicleMake[]> {
    return this.http
      .get<{ Results: VehicleMake[] }>(`${this.baseUrl}/vehicles/GetAllMakes?format=json`)
      .pipe(
        map((response) => {
          return response.Results;
        })
      );
  }

  /**
   * Obtiene los tipos de vehículos asociados a una marca dada su ID.
   * @param makeId - ID numérico de la marca.
   * @returns Observable con array de tipos de vehículos (VehicleType[]).
   */
  getVehicleTypesByMakeId(makeId: number): Observable<VehicleType[]> {
    return this.http
      .get<{ Results: VehicleType[] }>(
        `${this.baseUrl}/vehicles/GetVehicleTypesForMakeId/${makeId}?format=json`
      )
      .pipe(
        map((response) => {
          return response.Results;
        })
      );
  }

  /**
   * Obtiene los modelos asociados a una marca dada su ID.
   * @param makeId - ID numérico de la marca.
   * @returns Observable con array de modelos (Model[]).
   */
  getModelsByMakeId(makeId: number): Observable<Model[]> {
    return this.http
      .get<{ Results: Model[] }>(
        `${this.baseUrl}/vehicles/GetModelsForMakeId/${makeId}?format=json`
      )
      .pipe(
        map((response) => {
          return response.Results;
        })
      );
  }
}
