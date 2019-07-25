import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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

  constructor() {
  }

  getRecipes(): Recipe[] {
    // returns a copy of list
    return this.recipes.slice();
  }
}
