import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  // @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onAddItem(amountInput: HTMLInputElement) {
    const name: string = this.nameInputRef.nativeElement.value || '';
    const amount: number = parseInt(amountInput.value, 10);

    if (name.trim().length && !isNaN(amount)) {
      this.ingredientAdded.emit(new Ingredient(name, amount));
    }
  }
}
