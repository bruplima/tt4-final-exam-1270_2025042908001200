import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';

export const routes: Routes = [
  { path: 'recipes', component: RecipeListComponent },
  { path: 'add-recipe', component: RecipeCreateComponent },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, 
];
