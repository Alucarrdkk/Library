import { ChangeDetectorRef, Component } from '@angular/core';
import { BookService } from '../../book/book.service';
import { Book } from '../../book/book.models';
import { IMG_PATH } from '../../../environments/environments';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateProduct } from './update-product/update-product';
import { SeeProduct } from './see-product/see-product';
import { DeleteProduct } from './delete-product/delete-product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  books: Book[] = [];
  imgPath = IMG_PATH;

  constructor(private bookService : BookService, private cdr: ChangeDetectorRef, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadBooks();
  }
  
  openSeeModal(book : Book) {
    const modalRef = this.modalService.open(SeeProduct, {
      size: 'lg',
      centered: true
    });
    modalRef.componentInstance.book = book;
  }

  openUpdateModal(book : Book) {
    const modalRef = this.modalService.open(UpdateProduct, {
      size: 'lg',
      centered: true
    });

    modalRef.componentInstance.book = book;

    modalRef.componentInstance.bookUpdated.subscribe(() => {
      console.log("update");
      this.loadBooks();
    });
  }

  openDeleteModal(book: Book) {
    const modalRef = this.modalService.open(DeleteProduct, {
      size: 'lg',
      centered: true
    });
    console.log("test");
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
