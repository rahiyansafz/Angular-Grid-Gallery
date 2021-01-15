import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryGridComponent } from './gallery-grid.component';
import { GridItemComponent } from './grid-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GalleryGridComponent,
    GridItemComponent
  ],
  exports: [
    GalleryGridComponent
  ]
})
export class GalleryGridModule { }