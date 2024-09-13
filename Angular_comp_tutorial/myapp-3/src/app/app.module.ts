import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { OwnNgIfDirective } from './directives/own-ng-if.directive';
import { UserComponent } from './component/user/user.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { LogService } from './service/log.service';
import { AppService } from './service/app.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    OwnNgIfDirective,
    UserComponent,
    AddUserComponent,
    // we can also add the directive here
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UserService, LogService, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
