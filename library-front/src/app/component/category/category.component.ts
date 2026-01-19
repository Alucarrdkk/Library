import { ChangeDetectorRef, Component } from '@angular/core';
import { Category } from '../../category/category.models';
import { CategoryService } from '../../category/category.service';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {

  categories: Category[] = [];

  constructor(private category : CategoryService, private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit(): void {
    this.loadCategories();
    console.log(this.categories);
  }

  loadCategories(){
    this.category.getAllCategory().subscribe({
      next : (data) => {
        console.log(data);
        this.categories = data;
        this.cdr.detectChanges();
      },
      error : (error) => {
        console.error("Error fetching categories : " , error);
      },
    })
  }

}
