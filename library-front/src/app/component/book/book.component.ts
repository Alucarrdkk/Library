import { ChangeDetectorRef, Component, inject, OnInit, TemplateRef } from '@angular/core';
import { BookService } from '../../book/book.service';
import { Book } from '../../book/book.models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {

  books: Book[] = [];
  bookSelected!: Book;

  private modalService = inject(NgbModal);


  constructor(private book : BookService, private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){
    this.book.getAllBooks().subscribe({
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
    console.log(this.bookSelected);
  }

}
