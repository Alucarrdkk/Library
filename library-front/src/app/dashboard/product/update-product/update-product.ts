import { Component, Input } from '@angular/core';
import { Book } from '../../../book/book.models';
import { IMG_PATH } from '../../../../environments/environments';

@Component({
  selector: 'app-update-product',
  imports: [],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct {

  @Input() book: any;
  imgPath = IMG_PATH;

  constructor(){}

}
