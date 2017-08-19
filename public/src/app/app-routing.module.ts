import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeListComponent } from './bike-list/bike-list.component';
import { LoginRegComponent } from './login-reg/login-reg.component';


const routes: Routes = [
  {
    path: '', component: LoginRegComponent
  },
  {path: 'bikes', component: BikeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
