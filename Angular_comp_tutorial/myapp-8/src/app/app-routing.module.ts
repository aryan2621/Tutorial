import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataComponent } from './component/user-data/user-data.component';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'user', component: UserDataComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
