import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  // declaration means that the component will be used in the application
  // it is a list of all the components that will be used in the application

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent, AnotherComponent] // Multiple components
  // it means that the AppComponent and AnotherComponent will be
  // loaded when the application starts

  // Step-3: Bootstrap the AppModule
})
export class AppModule { }
