import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // using renderer is better way to work with DOM, works in other environments other than browser
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }
}
