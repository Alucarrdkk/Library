import { ChangeDetectorRef, Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BookService } from '../../book/book.service';
import { Book } from '../../book/book.models';
import { IMG_PATH } from '../../../environments/environments';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  bookSelected!: Book;
  imgPath = IMG_PATH;

  private modalService = inject(NgbModal);


  constructor(private bookService : BookService, private cdr: ChangeDetectorRef, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      const query = params['q'];

      if (query && query.trim() !== '') {
        this.bookService.searchBooks(query)
          .subscribe(data => {
            this.books = data;
            this.cdr.detectChanges();
          });
      } else {
        this.loadBooks();
      }
    });
  }

  loadBooks(){
    this.bookService.getAllBooks().subscribe({
      next : (data) => {
        this.books = data;
        this.cdr.detectChanges();
      },
      error : (error) => {
        console.error("Error fetching books : " , error);
      },
    })
  }

  openModal(content: any, book: Book) {
    this.bookSelected = book;
    this.modalService.open(content, {
      centered: true,
      size: 'lg' // sm | lg | xl
    });
  }

}
