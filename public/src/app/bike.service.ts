import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';
import { Bike } from './bike';

@Injectable()
export class BikeService {

  constructor(private _http: Http) { }
  
  createUser(user) {
    console.log("USER GOING INTO HTTP REQUEST:", user)
    return this._http.post('/api/create', user)
      .map(data => data.json()).toPromise();
  }

   showCurrentUser(){
    return this._http.get('/api/show')
    .map(data => data.json()).toPromise();
  }

}
