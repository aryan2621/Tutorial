import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { PlaceholderDirective } from './directive/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
