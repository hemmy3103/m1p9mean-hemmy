import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todoList = [
    'Development',
    'Test',
    'Deployment',
    'Monitoring'
    ];

  processList = [
    'Database'
  ];

  doneList = [
    'Design'
  ];

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer !== event.container) {

      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex)

    } else {
      moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    }
    console.log('todoList', this.todoList)
    console.log('processList', this.processList)
    console.log('doneList', this.doneList)
  }
}
