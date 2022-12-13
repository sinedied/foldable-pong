import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FoldableModule } from 'ngx-foldable';

import { AppComponent } from './app.component';
import { RacketComponent } from './racket.component';

@NgModule({
  declarations: [
    AppComponent,
    RacketComponent
  ],
  imports: [
    BrowserModule,
    FoldableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
