import {Component, Input, OnInit} from '@angular/core';
import { Todo } from '../model/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() public todoInput: Todo;
  
  constructor() {}

  ngOnInit(): void {}
}