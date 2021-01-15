import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GalleryGridModule } from './gallery-grid/gallery-grid.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    GalleryGridModule
  ],
  declarations: [ 
    AppComponent,
    HelloComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
