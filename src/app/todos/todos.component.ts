import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos: Todo[] = [];
  public text: string = 'type something';

  public clear() {
    this.text = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
