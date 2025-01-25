import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  @HostListener ("mouseover") onMouseOver(){
    this.el.nativeElement.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    this.el.nativeElement.style.transition = '0.5s ease-in-out';

  }
  @HostListener ("mouseleave") onMouseLeave(){
    this.el.nativeElement.style.boxShadow = 'none';
  }
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.boxShadow = 'none';
    this.el.nativeElement.style.transition = 'none';
   }

}
