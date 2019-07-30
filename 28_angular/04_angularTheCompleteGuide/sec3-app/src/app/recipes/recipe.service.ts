import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'simply test',
      'https://www.seriouseats.com/recipes/images/20110408-soup-dumpling11.jpg',
      [
        new Ingredient('flour', 2),
        new Ingredient('minced pork', 1)
      ]),
    new Recipe(
      'A test recipe 2',
      'simply test 2',
      'https://img.kidspot.com.au/_c5yRpt-/kk/2015/03/5209-501430-1.jpg',
      [
        new Ingredient('rice', 5),
        new Ingredient('egg', 1),
        new Ingredient('pork', 1)
      ])
  ];

  // injecting another service into this one to access shared data
  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    // returns a copy of list
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  newRecipe() {
    const newRecipe = new Recipe(
      'A new recipe',
      'description',
      'http://placehold.it/400x400',
      [
        new Ingredient('Ingredient', 0)
      ]);
    this.recipes.push(newRecipe);
    return this.recipes[this.recipes.length - 1];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
