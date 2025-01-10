// src/app/pages/brand-detail/brand-detail.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandDetailComponent } from './brand-detail.component';
import { MatCardModule } from '@angular/material/card';

// NgRx Imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { brandDetailReducer } from '../../store/reducers/brand-detail.reducer';
import { BrandDetailEffects } from '../../store/effects/brand-detail.effects';

// Otros módulos que puedas necesitar
import { BrandDetailRoutingModule } from './brand-detail.routing.module';

@NgModule({
  declarations: [BrandDetailComponent],
  imports: [
    CommonModule,
    MatCardModule,
    BrandDetailRoutingModule,
    StoreModule.forFeature('brandDetail', brandDetailReducer),
    EffectsModule.forFeature([BrandDetailEffects]),
  ],
  exports: [BrandDetailComponent]
})
export class BrandDetailModule {}
