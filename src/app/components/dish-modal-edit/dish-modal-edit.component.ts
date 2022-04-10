import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-modal-edit',
  templateUrl: './dish-modal-edit.component.html',
  styleUrls: ['./dish-modal-edit.component.css']
})
export class DishModalEditComponent implements OnInit {
  @Input() identity: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
