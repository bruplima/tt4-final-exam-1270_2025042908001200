import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // necessário para ngModel
import { CommonModule } from '@angular/common'; // necessário para *ngIf e *ngFor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: 'list' | 'create' | 'edit' = 'list';

  recipes: any[] = [];
  newRecipe = { name: '', ingredients: '', instructions: '' };
  editRecipeData: any = null;
  editIndex: number = -1;

  addRecipe() {
    this.recipes.push({ ...this.newRecipe });
    this.newRecipe = { name: '', ingredients: '', instructions: '' };
    this.currentView = 'list';
  }

  editRecipe(index: number) {
    this.editIndex = index;
    this.editRecipeData = { ...this.recipes[index] };
    this.currentView = 'edit';
  }

  updateRecipe() {
    if (this.editIndex !== -1) {
      this.recipes[this.editIndex] = { ...this.editRecipeData };
      this.editRecipeData = null;
      this.editIndex = -1;
      this.currentView = 'list';
    }
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
