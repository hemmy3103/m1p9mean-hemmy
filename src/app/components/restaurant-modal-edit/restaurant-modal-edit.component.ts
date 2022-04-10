import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-modal-edit',
  templateUrl: './restaurant-modal-edit.component.html',
  styleUrls: ['./restaurant-modal-edit.component.css']
})
export class RestaurantModalEditComponent implements OnInit {
  @Input() identity: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
