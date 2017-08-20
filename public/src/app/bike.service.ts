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

  login(user){
    console.log("LOGIN GOING INTO HTTP REQUEST",)
    return this._http.post('/api/login', user)
    .map(data => data.json()).toPromise();
  }

   getCurrentUser(){
     console.log("GETTING CURRENT USER")
    return this._http.get('/api/show',)
    .map(data => data.json()).toPromise();
  }

  logout(){
    console.log("LOGOUT GOING INTO HTTP REQUEST")
    return this._http.get('/api/logout')
    .map(data => data.json()).toPromise();
  }
  createBike(bike){
    console.log("BIKE GOING INTO HTTP REQUEST", bike)
    return this._http.post('api/create/bike', bike)
    .map(data => data.json()).toPromise();
  }

  getBikes(){
    console.log("GET BIKES GOING INTO HTTP REQUEST")
    return this._http.get('api/show/bikes')
    .map(data => data.json()).toPromise();
  }

  deleteBike(id){
    console.log("DELETE BIKES GOING INTO HTTP REQUEST")
    return this._http.delete(`/api/delete/bikes/${id}`).map(data => data.json()).toPromise();
  }

  getUserBikes(){
    console.log("GET USER BIKES GOING INTO HTTP REQUEST")
    return this._http.get('/api/show/user/bikes').map(data=> data.json()).toPromise();
  }

  updateBike(id, bike){
    console.log("UPDATE BIKE GOING INTO HTTP REQUEST")
    return this._http.post(`/api/update/bikes/${id}`, bike)
    .map(data => data.json()).toPromise();
  }
}
