import { Component } from '@angular/core';
import { NavBar } from "../component/nav-bar/nav-bar";
import { Footer } from "../component/footer/footer";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
