import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-modal-add',
  templateUrl: './dish-modal-add.component.html',
  styleUrls: ['./dish-modal-add.component.css']
})
export class DishModalAddComponent implements OnInit {
  @Input() identity: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
