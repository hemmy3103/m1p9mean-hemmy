import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IDish } from 'src/app/types/types';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-to-card-modal',
  templateUrl: './add-to-card-modal.component.html',
  styleUrls: ['./add-to-card-modal.component.css']
})
export class AddToCardModalComponent implements OnInit {
  @Input() identity: string | undefined;
  number: number = 0;
  @Input() showModal: boolean | undefined;
  @Input() dish: IDish| undefined;

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
  }

  toggleModal(): void {
    this.showModal = false;
    this.utilsService.addPanier(this.dish, this.number);
  }

}
