import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <hr>
    <p>Counter: {{counter}}</p>
    <button (click)="increaseBy(100)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>


  `
})

export class CounterComponent {
  constructor() { }

  public counter:number = 0;

  increaseBy(val:number): void{
    this.counter+=val;
  }

  decreaseBy(val:number): void{
    this.counter-=val;
  }

  reset(): void{
    this.counter=0;
  }

}
