import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-toogle',
  templateUrl: './switch-toogle.component.html',
  styleUrls: ['./switch-toogle.component.css']
})
export class SwitchToogleComponent implements OnInit {
  @Input() identity: string | undefined;
  @Input() isChecked: boolean | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
