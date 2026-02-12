import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Register } from '../register/register';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(    public activeModal: NgbActiveModal, private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(Register, {
      size: 'lg',
      centered: true
  });

    this.activeModal.close();

    modalRef.componentInstance.message = "Hello depuis le parent !";

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
