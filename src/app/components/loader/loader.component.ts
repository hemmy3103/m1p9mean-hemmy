import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() siblings: [] = [];
}
