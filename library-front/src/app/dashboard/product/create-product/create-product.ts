import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from '../../../book/book.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Book } from '../../../book/book.models';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {

  @Output() productCreated = new EventEmitter<Book>();

  form: FormGroup;

  book: any = {
    isbn: '',
    title: '',
    author: '',
    price: 0,
    description: '',
    imageFile: null
  };

  constructor(private bookService : BookService, private fb: FormBuilder, public activeModal: NgbActiveModal) {
      this.form = this.fb.group({
      isbn: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      title: ['', [Validators.required, Validators.maxLength(255),]],
      author: ['', [Validators.required, Validators.maxLength(255),]],
      price: ['', [Validators.max(1000), Validators.min(0)]],
      description: ['', [Validators.maxLength(999)]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (this.form.valid) {
      
      this.book.isbn = this.form.value["isbn"];
      this.book.title = this.form.value["title"];
      this.book.author = this.form.value["author"];
      this.book.price = this.form.value["price"];
      this.book.description = this.form.value["description"];

      console.log('Book à créer :', this.book);

      this.bookService.createBook(this.book).subscribe({
          next: 
          (res) => {
            console.log('Produit créé !', res);
            this.productCreated.emit();
          },
          error: (err) => console.error('Erreur création', err)
        });
    }
  }

  // onFileSelected(event: any) {
  // if (event.target.files.length > 0) {
  //   this.book.imageFile = event.target.files[0];
  // }
  //}

}
