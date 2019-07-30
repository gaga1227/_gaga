import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  recipe: Recipe;
  private id: number;
  private paramSubscription: Subscription;
  private editMode = false;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.paramSubscription = this.route.params
      .subscribe((params: Params) => {
        this.editMode = !!params.id;
        this.id = parseInt(params.id, 10);
      });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

}
