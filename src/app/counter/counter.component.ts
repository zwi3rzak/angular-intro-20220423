import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  value = 0;

  increment() {
    this.value += 10;
  }

  decrement() {
    this.value -= 10;
  }

  constructor() {}

  ngOnInit(): void {}
}
