import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'http://localhost:5183/backend/recipes'; 

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createRecipe(recipe: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, recipe);
  }

  updateRecipe(id: number, recipe: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, recipe);
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
