import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSliderModule
  ],
  exports:[
    MatTabsModule,
    MatProgressBarModule,
    MatSliderModule
  ]
})
export class MaterialModule { }
