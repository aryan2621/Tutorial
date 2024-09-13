import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOwnNgIf]',
})
export class OwnNgIfDirective {
  @Input() appOwnNgIf: boolean = false;

  ngOnInit(): void {
    if (this.appOwnNgIf) {
      this.vref.createEmbeddedView(this.templateRef);
    } else {
      this.vref.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vref: ViewContainerRef
  ) {}
}
