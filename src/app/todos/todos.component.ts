import {ThisReceiver} from '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import {Todo} from './model/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})

export class TodosComponent implements OnInit {
  public todos: Todo[] = [];
  public text: string = 'type something';

  public clear() {
    this.text = '';
  }

  public addTodo() {
    const todo: Todo = {
      text: this.text,
      created: Date.now(),
      done: false,
      priority: Math.ceil(Math.random() * 3),
    };
    this.todos.push(todo);
    this.clear();
  }

public deleteTodo(todo: Todo) {
  const index = this.todos.indexOf(todo);
  this.todos.splice(index, 1);

}

  constructor() {}

  ngOnInit(): void {}
}
