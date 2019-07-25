import { Recipe } from './recipe.model';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'simply test',
      'https://www.seriouseats.com/recipes/images/20110408-soup-dumpling11.jpg'),
    new Recipe(
      'A test recipe 2',
      'simply test 2',
      'https://img.kidspot.com.au/_c5yRpt-/kk/2015/03/5209-501430-1.jpg')
  ];

  constructor() {
  }

  getRecipes(): Recipe[] {
    // returns a copy of list
    return this.recipes.slice();
  }
}
