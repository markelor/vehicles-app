import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/reducers';
import { VehicleType, Model, VehicleMake } from '../../pages/interfaces/vehicle.interface';
import { 
  loadVehicleTypes, 
  loadModels 
} from '../../store/actions/brand-detail.actions';
import { 
  selectVehicleTypes, 
  selectModels, 
  selectBrandDetailLoading, 
  selectBrandDetailError 
} from '../../store/selectors/brand-detail.selectors';
import { selectAllMakes } from '../../store/selectors/makes.selectors';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss'],
  standalone: false,
})
export class BrandDetailComponent implements OnInit {
  /**
   * Identificador de la marca obtenido de la URL.
   */
  brandId!: number;

  /**
   * Nombre de la marca obtenida desde el estado.
   */
  brandName: string = ''; // Inicializamos la propiedad

  /**
   * Observable para tipos de vehículos desde el store.
   */
  vehicleTypes$!: Observable<VehicleType[]>;

  /**
   * Observable para modelos desde el store.
   */
  models$!: Observable<Model[]>;

  /**
   * Observable para el estado de carga.
   */
  loading$!: Observable<boolean>;

  /**
   * Observable para manejar errores.
   */
  error$!: Observable<string | null>;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    // Obtener el ID de la marca desde la URL
    this.brandId = Number(this.route.snapshot.paramMap.get('id'));

    // Obtener el nombre de la marca desde el estado global
    this.store.select(selectAllMakes).subscribe((makes: VehicleMake[]) => {
      const selectedMake = makes.find((make) => make.Make_ID === this.brandId);
      this.brandName = selectedMake?.Make_Name || 'Marca desconocida';
    });

    // Despachar acciones para cargar tipos de vehículos y modelos
    this.store.dispatch(loadVehicleTypes({ makeId: this.brandId }));
    this.store.dispatch(loadModels({ makeId: this.brandId }));

    // Seleccionar datos desde el store
    this.vehicleTypes$ = this.store.select(selectVehicleTypes);
    this.models$ = this.store.select(selectModels);
    this.loading$ = this.store.select(selectBrandDetailLoading);
    this.error$ = this.store.select(selectBrandDetailError);
  }

  /**
   * Navegar hacia atrás.
   */
  goBack(): void {
    this.router.navigate(['/']); // Navegar hacia la página de inicio
  }
}
