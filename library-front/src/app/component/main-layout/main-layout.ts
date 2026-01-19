import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../footer/footer";
import { CategoryComponent } from "../category/category.component";

@Component({
  selector: 'app-main-layout',
  imports: [NavBar, RouterOutlet, Footer, CategoryComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
