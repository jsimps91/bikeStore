import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeListComponent } from './bike-list/bike-list.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { BikeFormComponent } from './bike-list/bike-form/bike-form.component';
import { ListingComponent } from './bike-list/listing/listing.component';

const routes: Routes = [
  {
    path: '', component: LoginRegComponent
  },
  {
    path: 'bikes', component: BikeListComponent, children: [
      { path: 'new', component: BikeFormComponent },
      { path: 'show', component: ListingComponent }

    ]
  }
]  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
