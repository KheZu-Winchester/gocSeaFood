import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-shwe-ginga',
  templateUrl: './shwe-ginga.component.html',
  styleUrls: ['./shwe-ginga.component.scss']
})
export class ShweGingaComponent {
   button_attributes : [];
    constructor(private elementRef : ElementRef){
      this.button_attributes = this.elementRef.nativeElement.getAttribute('class')
    }
}
