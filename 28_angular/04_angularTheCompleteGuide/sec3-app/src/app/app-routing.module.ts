import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  // 'pathMatch: full' to avoid infinite loop,
  // '' matches everything as a prefix
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: ':id', component: RecipeDetailComponent}
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '**', redirectTo: '/recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {})],
  exports: [RouterModule] // dependency requires to be exported along
})
export class AppRoutingModule {
}
