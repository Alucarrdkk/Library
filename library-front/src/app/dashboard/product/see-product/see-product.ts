import { Component, Input } from '@angular/core';
import { IMG_PATH } from '../../../../environments/environments';

@Component({
  selector: 'app-see-product',
  imports: [],
  templateUrl: './see-product.html',
  styleUrl: './see-product.css',
})
export class SeeProduct {

  @Input() book: any;
  imgPath = IMG_PATH;

  constructor(){}

}
