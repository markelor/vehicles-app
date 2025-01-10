/**
 * Interfaces para tipar las respuestas de la API
 */

/** Representa una marca de vehículo */
export interface VehicleMake {
    Make_ID: number;
    Make_Name: string;
  }
  
  /** Representa un tipo de vehículo asociado a una marca */
  export interface VehicleType {
    VehicleTypeId: number;
    VehicleTypeName: string;
  }
  
  /** Representa un modelo de vehículo asociado a una marca */
  export interface Model {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
  }
  
  /**
   * Interfaz para el estado de detalle de una marca en el store.
   */
  export interface BrandDetailState {
    vehicleTypes: VehicleType[]; // Lista de tipos de vehículos
    models: Model[]; // Lista de modelos de vehículos
    loading: boolean; // Indica si se están cargando los datos
    error: string | null; // Mensaje de error o `null` si no hay error
  }
  