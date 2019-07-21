import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: {name: string};
  @ViewChild('heading', {static: true}) heading: ElementRef;

  constructor() {
    console.log('[lifecycle]', 'constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[lifecycle]', 'ngOnChanges: called on data-bound fields initial set and future changes', changes);
  }

  ngOnInit() {
    console.log('[lifecycle]', 'ngOnInit: called once when data-bound fields initial set and before child view is checked');
    console.log(this.heading.nativeElement.textContent); // nothing, view is not rendered yet
  }

  ngDoCheck(): void {
    console.log('[lifecycle]', 'ngDoCheck: called after the default change-detector runs');
  }

  ngAfterContentInit(): void {
    console.log('[lifecycle]', 'ngAfterContentInit: called once when content bound data set');
  }

  ngAfterContentChecked(): void {
    console.log('[lifecycle]', 'ngAfterContentChecked: called when content is checked by change-detector');
  }

  ngAfterViewInit(): void {
    console.log('[lifecycle]', 'ngAfterViewInit: called once when view is initialised');
    console.log(this.heading.nativeElement.textContent); // available, view is rendered
  }

  ngAfterViewChecked(): void {
    console.log('[lifecycle]', 'ngAfterViewChecked: called when view is checked by change-detector');
  }

  ngOnDestroy(): void {
    console.log('[lifecycle]', 'ngOnDestroy: called once when component is destroyed');
  }

}
