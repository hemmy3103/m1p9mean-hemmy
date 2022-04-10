import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-to-card-modal',
  templateUrl: './add-to-card-modal.component.html',
  styleUrls: ['./add-to-card-modal.component.css']
})
export class AddToCardModalComponent implements OnInit {
  @Input() identity: string | undefined;
  number: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
