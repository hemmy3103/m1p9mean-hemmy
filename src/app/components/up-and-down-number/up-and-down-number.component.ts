import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-up-and-down-number',
  templateUrl: './up-and-down-number.component.html',
  styleUrls: ['./up-and-down-number.component.css']
})
export class UpAndDownNumberComponent implements OnInit {
  @Input() number: number = 0;
  @Output() getNumberChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  valuechange(newValue: number) {
    this.number = newValue;
    this.getNumberChange.emit(newValue)
  }
  down() {
    this.number = this.number - 1;
    this.getNumberChange.emit(this.number)
  }

  up() {
    this.number = this.number + 1;
    this.getNumberChange.emit(this.number)
  }
}
