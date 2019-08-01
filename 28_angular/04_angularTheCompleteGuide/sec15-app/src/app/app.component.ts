import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // use @viewchild to get child form element via element ref name
  // @ViewChild('ngForm', {static: false})
  // ngForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // ngSubmit handler, ref is passed form template
  onSubmit(event: Event, form: HTMLFormElement, ngForm: NgForm) {
    console.log(ngForm);
  }

  // using ref from viewchild
  // onSubmitWithViewChild() {
  //   console.log(this.ngForm);
  // }
}
