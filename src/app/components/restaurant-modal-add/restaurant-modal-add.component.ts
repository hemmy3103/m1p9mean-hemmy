import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-modal-add',
  templateUrl: './restaurant-modal-add.component.html',
  styleUrls: ['./restaurant-modal-add.component.css']
})
export class RestaurantModalAddComponent implements OnInit {
  @Input() identity: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
