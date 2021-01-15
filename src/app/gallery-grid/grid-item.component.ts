import { Component, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
  selector: 'grid-item',
  template: `
    <img [src]="item.src" alt="broken">
  `,
  styles: [`
    :host {
      background-color: #bbbbff;
      display: block;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  `]
})
export class GridItemComponent  {
  
  @Input() item: any;
  @HostBinding('style.height') height = '0';

  constructor(private elRef: ElementRef) {
    window.addEventListener('resize', () => {})
  }

  ngDoCheck() {
    const width = this.elRef.nativeElement.getBoundingClientRect().width;
    this.height = `${width}px`;
  }
}
