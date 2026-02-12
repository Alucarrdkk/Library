import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Login } from '../login/login';

@Component({
  selector: 'app-nav-bar',
  imports: [FormsModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  searchText: string = '';

  constructor(private router: Router, private modalService: NgbModal) {}

  onSearch() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchText }
    });
  }

  navigate(element: String) {
    this.router.navigate(['/' + element]);
  }

  openModal() {
    const modalRef = this.modalService.open(Login, {
      size: 'lg',
      centered: true
  });

    modalRef.componentInstance.message = "Hello";

    modalRef.result.then(
      result => {
        console.log('Fermé avec:', result);
      },
      reason => {
        console.log('Dismissed:', reason);
      }
    );
  }

}
