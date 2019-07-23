import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  // define input options and default values
  @Input('appDropdown') options = {
    defaultIsOpen: false
  };

  // bind 'class.open' class to 'isOpen' value
  @HostBinding('class.open') isOpen = false;

  // inject elementRef from constructor and add as field
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    // update 'isOpen' value when bound property data is avaiable but before render
    if (this.options.defaultIsOpen) {
      this.isOpen = true;
    }
  }

  // add event listener to document for click outside
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    const clickOutside = !this.elementRef.nativeElement.contains(event.target);
    this.isOpen = clickOutside ? false : !this.isOpen;
  }

}
