import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categoryAPI } from '../../environments/environments';
import { Category } from './category.models';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

    constructor(private http: HttpClient) {
    
  }

  createCategory(category : Category): Observable<Category>{
    return this.http.post<Category>(categoryAPI.apiUrl, category);
  }

  getAllCategory(): Observable<Category[]>{
    return this.http.get<Category[]>(categoryAPI.apiUrl);
  }
  
}
