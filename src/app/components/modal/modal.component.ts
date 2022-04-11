import { Component, Input, OnInit } from '@angular/core';
import { IDish } from 'src/app/types/types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() showModal: boolean | undefined;
  @Input() dish: IDish| undefined;

  constructor() { }

  ngOnInit(): void {
  }
  toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
