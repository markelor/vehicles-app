import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AppState } from '../../store/reducers';
import { loadMakes } from '../../store/actions/makes.actions';
import { selectAllMakes } from '../../store/selectors/makes.selectors';
import { Observable, Subscription } from 'rxjs';
import { VehicleMake } from '../../pages/interfaces/vehicle.interface';

/**
 * Componente principal de la aplicación.
 * Muestra la lista de marcas y permite filtrar y desplazarse dinámicamente.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  /**
   * Observable que emite el array de marcas desde el store de NgRx.
   */
  makes$: Observable<VehicleMake[]>;

  /**
   * Todas las marcas obtenidas.
   */
  allMakes: VehicleMake[] = [];

  /**
   * Marcas filtradas según el término de búsqueda.
   */
  filteredMakes: VehicleMake[] = [];

  /**
   * Marcas visibles en la pantalla (paginación dinámica).
   */
  displayedMakes: VehicleMake[] = [];

  /**
   * Término de búsqueda introducido por el usuario.
   */
  searchTerm: string = '';

  /**
   * Incremento para cargar elementos al hacer scroll.
   */
  private increment: number = 1;

  /**
   * Número inicial de elementos visibles.
   */
  private initialLoad: number = 5;

  /**
   * Índice actual que representa el límite de elementos mostrados.
   */
  private currentEndIndex: number = 5;

  /**
   * Constructor del componente.
   * @param store - Store de NgRx para manejar el estado global.
   * @param router - Router de Angular para navegación.
   */
  constructor(private store: Store<AppState>, private router: Router) {
    this.makes$ = this.store.select(selectAllMakes);
  }

  /**
   * Método de ciclo de vida: se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    // Despachar la acción para cargar todas las marcas
    this.store.dispatch(loadMakes());

    // Suscribirse al observable de marcas desde el store
    this.makes$.subscribe((makes: VehicleMake[]) => {
      this.allMakes = makes;
      this.filteredMakes = makes;

      // Inicializar la lista de elementos visibles
      this.currentEndIndex = this.initialLoad;
      this.displayedMakes = this.filteredMakes.slice(0, this.currentEndIndex);
    });
  }

  /**
   * Filtrar las marcas basándose en el término de búsqueda introducido por el usuario.
   */
  onSearch(): void {
    const term = this.searchTerm.trim().toLowerCase();

    if (term) {
      this.filteredMakes = this.allMakes.filter((make) =>
        make.Make_Name.toLowerCase().includes(term)
      );
    } else {
      this.filteredMakes = this.allMakes;
    }

    // Reiniciar la lista visible
    this.currentEndIndex = this.initialLoad;
    this.displayedMakes = this.filteredMakes.slice(0, this.currentEndIndex);
  }

  /**
   * Manejar el scroll dinámico para cargar más elementos.
   */
  onScroll(): void {
    if (this.currentEndIndex < this.filteredMakes.length) {
      this.currentEndIndex += this.increment;
      this.displayedMakes = this.filteredMakes.slice(0, this.currentEndIndex);
    }
  }

  /**
   * Navegar al detalle de la marca seleccionada.
   * @param makeId - Identificador de la marca.
   */
  goToBrandDetail(makeId: number): void {
    this.router.navigate(['/brand', makeId]);
  }
}
