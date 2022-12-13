import { Component, OnInit } from '@angular/core';
import { ScreenContext } from 'ngx-foldable';

@Component({
  selector: 'app-root',
  template: `
    <section class="playfield"
    (mousemove)="onClick($event)"
    (ontouchstart)="onTouchStart($event)"
    (ontouchmove)="onTouchMove($event)"
    (ontouchend)="onTouchEnd($event)"
    >
      <app-racket [x]="x1" [y]="y1"></app-racket>
      <div class="ball"></div>
      <div class="racket"></div>
    </section>
  `,
  styles: [`
    .playfield {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

  `]
})
export class AppComponent implements OnInit {
  x1 = 0;
  y1 = 0;

  constructor(screenContext: ScreenContext) {
    screenContext
      .asObservable()
      .subscribe((context) => {
        console.log('Screen context changed:', context);
      });
  }

  onClick(event: Event) {
    const mouseEvent = event as MouseEvent;
    this.x1 = mouseEvent.clientX;
    this.y1 = mouseEvent.clientY;
  }

  onTouchStart(event: Event) {
    const touchEvent = event as TouchEvent;
    const touch = touchEvent.touches[0];
    this.x1 = touch.clientX;
    this.y1 = touch.clientY;
  }

  onTouchMove(event: Event) {
  }

  onTouchEnd(event: Event) {
  }

  ngOnInit() {
  }
}
