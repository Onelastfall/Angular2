import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type="text" [(ngModel)]="inputMsg">
      <button (click)="update.emit({text:inputMsg})">Click me!</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  @Input() inputMsg;

  @Output() update = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
