import { Component } from '@angular/core';
import { BookService } from '../../../book/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {

  book: any = {
    isbn: '',
    title: '',
    author: '',
    price: 0,
    description: '',
    imageFile: null
  };

  constructor(private bookService : BookService) {}

  onFileSelected(event: any) {
  if (event.target.files.length > 0) {
    this.book.imageFile = event.target.files[0];
  }
}

  createProduct() {
    console.log('Book à créer :', this.book);
    
    // Appel au service Angular
    this.bookService.createBook(this.book).subscribe({
      next: (res) => console.log('Produit créé !', res),
      error: (err) => console.error('Erreur création', err)
    });
  }

}
