import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { AboutComponent } from './component/about/about.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    NotFoundComponent,
  ],

  imports: [BrowserModule, AppRoutingModule],

  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
