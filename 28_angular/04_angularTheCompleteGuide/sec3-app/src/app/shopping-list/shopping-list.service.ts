import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  // use subject to replace event emitter for non-dom subscriptions
  ingredientsChangedSubject = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {
  }

  getIngredient(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // not using loop to save event emissions
    this.ingredients.push(...ingredients);
    this.ingredientsChangedSubject.next(this.ingredients.slice());
  }
}
