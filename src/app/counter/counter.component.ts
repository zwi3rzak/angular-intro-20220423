import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  value = 0;

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  constructor() {}

  ngOnInit(): void {}
}
