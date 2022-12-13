import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-racket',
  template: `<div class="racket" [style.left.px]="_x" [style.top.px]="_y"></div>`,
  styles: [`
    .racket {
      position: absolute;
      background: #f00;
      border-radius: 8px;
      width: 100px;
      height: 20px;
    }
  `],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RacketComponent {
  private layout: SafeStyle = {};
  _x = 0;
  _y = 0;

  @Input() set x(val: number) {
    this._x = val;
    // this.updateLayout();
  };

  @Input() set y(val: number) {
    this._y = val;
    // this.updateLayout();
  }

  // @HostBinding('style')
  // get style(): SafeStyle {
  //   return this.layout;
  // }

  private updateLayout(): void {
    this.layout = {
      left: this._x,
      top: this._y,
      width: '100px',
      height: '20px'
    };
  }
}
