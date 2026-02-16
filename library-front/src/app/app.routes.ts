import { Routes } from '@angular/router';
import { MainLayout } from './component/main-layout/main-layout';
import { BookComponent } from './component/book/book.component';
import { Dashboard } from './dashboard/dashboard';
import { Product } from './dashboard/product/product';
import { CreateProduct } from './dashboard/product/create-product/create-product';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: BookComponent },
      { path: 'search', component: BookComponent },
    ]
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', component: Product },
    ]
  },
];
