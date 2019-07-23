import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  constructor(
    // Inject dependencies
    private templateRef: TemplateRef<any>, // content (what)
    private viewContainerRef: ViewContainerRef // location (where)
  ) {
  }

  // property bound setter, input property value gets evaluated in setter
  @Input('appUnless') set unless(condition: boolean) {
    if (!condition) {
      // create view and insert into the container
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // destroy all views inside
      this.viewContainerRef.clear();
    }
  }

}
