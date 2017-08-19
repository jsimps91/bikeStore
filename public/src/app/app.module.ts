import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BikeService } from './bike.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    BikeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
