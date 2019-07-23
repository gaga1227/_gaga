import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  // bind directive field to host element's property
  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // using renderer is better way to work with DOM, works in other environments other than browser
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');

    // now property are bound but before things are rendered
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
