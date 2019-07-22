import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // bad practice to manipulate DOM directly
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
