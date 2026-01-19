import { Routes } from '@angular/router';
import { MainLayout } from './component/main-layout/main-layout';
import { BookComponent } from './component/book/book.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: BookComponent },
      //{ path: 'products', component: ProductsComponent },
    ]
  },
];
