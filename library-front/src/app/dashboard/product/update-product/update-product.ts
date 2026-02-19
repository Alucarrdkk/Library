import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Book } from '../../../book/book.models';
import { IMG_PATH } from '../../../../environments/environments';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../../book/book.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-product',
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct {

  @Output() bookUpdated = new EventEmitter<Book>();

  book!: Book;
  form!: FormGroup;
  imgPath = IMG_PATH;

  constructor(private bookService : BookService, private fb: FormBuilder, private activeModal: NgbActiveModal){}

  ngOnInit() {
      this.form = this.fb.group({
      isbn: [this.book.isbn, [Validators.required, Validators.pattern(/^\d{13}$/)]],
      title: [this.book.title, [Validators.required, Validators.maxLength(255),]],
      author: [this.book.author, [Validators.required, Validators.maxLength(255),]],
      price: [this.book.price, [Validators.max(1000), Validators.min(0)]],
      description: [this.book.description, [Validators.maxLength(999)]],
    });
  }

  onSubmit() {

      this.book.isbn = this.form.value["isbn"];
      this.book.title = this.form.value["title"];
      this.book.author = this.form.value["author"];
      this.book.price = this.form.value["price"];
      this.book.description = this.form.value["description"];
      
      this.bookService.updateBook(this.book)
        .subscribe({
          next: (res) => {
            console.log("Book modifié", res);
            this.bookUpdated.emit();
            this.activeModal.close('deleted');
          },
          error: (err) => {
            console.error("Erreur", err);
          }
        });
    }
}


