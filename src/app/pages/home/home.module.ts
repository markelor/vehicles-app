import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeRoutingModule } from './home.routing.module';
/**
 * Módulo para la pantalla Home.
 * Incluye el HomeComponent y módulos de Angular Material requeridos.
 */
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ScrollingModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,          
    MatIconModule,  
    HomeRoutingModule // Agregar el módulo de rutas 
    
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
