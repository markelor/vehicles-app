// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'brand/:id', 
    loadChildren: () => import('./pages/brand-detail/brand-detail.module').then(m => m.BrandDetailModule) 
  },
  { path: '**', redirectTo: '' }
];

/**
 * Módulo de rutas principal que importa y exporta RouterModule.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
