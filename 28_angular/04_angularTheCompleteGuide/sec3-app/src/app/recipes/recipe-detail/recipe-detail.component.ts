import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  private recipe: Recipe;
  private paramSubscription: Subscription;
  private id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    // angular observables subscriptions will be cleaned up automatically
    this.paramSubscription = this.route.params
      .subscribe((params: Params) => {
        this.id = parseInt(params.id, 10);
        this.recipe = this.recipeService.getRecipe(this.id);
      });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // for demo purposes
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
