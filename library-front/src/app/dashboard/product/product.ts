import { ChangeDetectorRef, Component } from '@angular/core';
import { BookService } from '../../book/book.service';
import { Book } from '../../book/book.models';
import { IMG_PATH } from '../../../environments/environments';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateProduct } from './update-product/update-product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  books: Book[] = [];
  bookSelected!: Book;
  imgPath = IMG_PATH;

  constructor(private bookService : BookService, private cdr: ChangeDetectorRef, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadBooks();
  }
  
  openModal(book : Book) {
    this.bookSelected = book;
    const modalRef = this.modalService.open(UpdateProduct, {
      size: 'lg',
      centered: true
    });
    modalRef.componentInstance.book = book;
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

}
