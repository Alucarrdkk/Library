import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { bookAPI } from '../../environments/environments';
import { Book } from './book.models';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  constructor(private http: HttpClient) {
    
  }

  createBook(book : Book): Observable<Book>{
    return this.http.post<Book>(bookAPI.apiUrl, book);
  }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(bookAPI.apiUrl);
  }
  
}
