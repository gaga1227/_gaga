import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // ngSubmit handler
  onSubmit(event: Event, form: HTMLFormElement, ngForm: NgForm) {
    console.log(event, form, ngForm);
  }
}
