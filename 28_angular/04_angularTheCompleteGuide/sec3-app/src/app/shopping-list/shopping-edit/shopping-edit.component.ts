import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;

  // @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onAddItem(amountInput: HTMLInputElement) {
    const name: string = this.nameInputRef.nativeElement.value || '';
    const amount: number = parseInt(amountInput.value, 10);

    if (name.trim().length && !isNaN(amount)) {
      this.shoppingListService.addIngredient(new Ingredient(name, amount));
    }
  }
}
