import { Component, Input } from '@angular/core';
import { Book } from '../../../book/book.models';
import { BookService } from '../../../book/book.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-product',
  imports: [],
  templateUrl: './delete-product.html',
  styleUrl: './delete-product.css',
})
export class DeleteProduct {

  book!: any;

  constructor (private bookService : BookService, public activeModal: NgbActiveModal) {}

  deleteBook() {
    this.bookService.deleteBook(this.book.id).subscribe({
      next: () => {
        this.activeModal.close('deleted');
      },
      error: (err) => {
        console.error('Erreur lors de la suppression', err);
      }
    });
  }

}
