import { Component, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'gallery-grid',
  template: `
    <grid-item 
      *ngFor="let item of gridItems"
      [item]="item"
    ></grid-item>
  `,
  styles: [`
    :host {
      display: grid;
      width: 100%;
      grid-gap: 10px;
    }
  `]
})
export class GalleryGridComponent  {
  
  @Input() columns: number;
  @Input() gridItems: any[];

  get templateColumns() {
    let value = '';
    for (let i = 0; i < this.columns; i++ ) {
      value = `${value} ${100 / this.columns}%`;
    }
    return value;
  }

  @HostBinding('style.grid-template-columns') gridColumns = this.templateColumns;

  ngOnChanges(changes) {
    if (changes.columns && changes.columns.currentValue) {
      this.gridColumns = this.templateColumns;
    }
  }
}
