import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() public todoInput: Todo;

  @Output() public delete = new EventEmitter<Todo>();

  public onDelateClick() {
    this.delete.emit(this.todoInput);
  }

  constructor() {}

  ngOnInit(): void {}
}