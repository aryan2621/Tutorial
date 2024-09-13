import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective {

  @Input() defaultColor: string = 'pink';
  @Input() highlightColor: string = 'yellow';

  constructor(private element: ElementRef, private rerender: Renderer2) {}
  ngOnInit() {
    // Example of using ElementRef
    // this.element.nativeElement.style.backgroundColor = 'yellow';

    // Example of using Renderer2
    // this.rerender.setStyle(this.element.nativeElement,'background-color','yellow');
  }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.rerender.setStyle(
  //     this.element.nativeElement,
  //     'background-color',
  //     'yellow'
  //   );
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.rerender.setStyle(
  //     this.element.nativeElement,
  //     'background-color',
  //     'transparent'
  //   );
  // }
  // @HostListener('click') onClick() {
  //   this.rerender.setStyle(
  //     this.element.nativeElement,
  //     'background-color',
  //     'green'
  //   );
  // }
  // Hostlistener is used to listen to the events of the host element

  // Hostbinding is used to bind the properties of the host element
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  @HostListener('mouseenter') onMouseEnter() {
    // this.backgroundColor = 'yellow';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('click') onClick() {
    // this.backgroundColor = 'green';
    this.backgroundColor = this.highlightColor;
  }
}
