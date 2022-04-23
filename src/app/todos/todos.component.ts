import { Component, OnInit } from '@angular/core';
import {Todo} from './model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
