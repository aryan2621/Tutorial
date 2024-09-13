import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
FormsModule

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
