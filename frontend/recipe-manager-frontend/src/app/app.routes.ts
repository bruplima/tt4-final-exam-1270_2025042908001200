import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipes/recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' }, 
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/create', component: RecipeCreateComponent },
  { path: 'recipes/edit/:id', component: RecipeEditComponent },
];
