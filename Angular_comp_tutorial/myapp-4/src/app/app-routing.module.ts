import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { AboutComponent } from './component/about/about.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuardService],
    // canActivateChild to protect the children routes only
    // this is to protect based on the whether is logged or not
    children: [
      {
        path: ':id/:name',
        component: UserComponent,
        // chaining the routes to the user component
      },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },

  // { path: 'user/:id/:name', component: UserComponent },
];
// routes is an array of Route objects

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // RouterModule.forRoot(routes) is a method that takes an
  // array of routes as an argument
})
export class AppRoutingModule {}
