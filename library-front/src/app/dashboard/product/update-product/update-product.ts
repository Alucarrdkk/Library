import { Component, Input, SimpleChanges } from '@angular/core';
import { Book } from '../../../book/book.models';
import { IMG_PATH } from '../../../../environments/environments';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct {

  book!: Book;
  form!: FormGroup;
  imgPath = IMG_PATH;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.form = this.fb.group({
      isbn: [this.book?.isbn || ''],
      title: [this.book?.title || ''],
      author: [this.book?.author || ''],
      price: [''],
      description: [this.book?.description || ''],
      //image: [this.book?.imgPath || ''],
    });
  }

}
