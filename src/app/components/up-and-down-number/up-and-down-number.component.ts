import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-and-down-number',
  templateUrl: './up-and-down-number.component.html',
  styleUrls: ['./up-and-down-number.component.css']
})
export class UpAndDownNumberComponent implements OnInit {
  @Input() number: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  valuechange(newValue: number) {
    this.number = newValue;
  }
  down() {
    this.number = this.number - 1;
  }

  up() {
    this.number = this.number + 1;
  }
}
