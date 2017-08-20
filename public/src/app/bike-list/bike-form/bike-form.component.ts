import { Component, OnInit } from '@angular/core';
import { Bike } from '../../bike'
import { BikeService } from './../../bike.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bike-form',
  templateUrl: './bike-form.component.html',
  styleUrls: ['./bike-form.component.css']
})
export class BikeFormComponent implements OnInit {

  bike = new Bike();
  bikeMessage = null;
  bikes;
  currentUser;
  constructor(private _router: Router, private _bikeService: BikeService) { }

  ngOnInit() {
    this.getCurrentUser()
    this.getUserBikes()
  }

  createBike() {
    console.log("ABOUT TO CREATE BIKE", this.bike)
    this._bikeService.createBike(this.bike)
      .then((response) => {
        console.log("HTTP RESPONSE", response);
        if (response.newBike === true) {
          this.bike = new Bike();
          this.bikeMessage = response.message
          this._router.navigateByUrl('/bikes/show')
        }
        else {
          this.bike = new Bike();
          this.bikeMessage = response.message
        }
      })
  }

    getCurrentUser() {
    console.log("ABOUT TO GET CURRENT USER")
    this._bikeService.getCurrentUser()
      .then((response) => {
        console.log("CURRENT USER", response)
        this.currentUser = response.currentUser
      })
    }
    
    getUserBikes(){
      console.log("ABOUT TO GET USER BIKES")
      this._bikeService.getUserBikes()
      .then((response)=>{
        console.log("USER BIKES", response)
        this.bikes = response.bikes
      })
    }
      deleteBike(id){
      console.log("ABOUT TO DELETE BIKE WITH ID", id)
      this._bikeService.deleteBike(id)
      .then(response => this.getUserBikes()).catch(err => console.log(err));

  
    }
    updateBike(id){
      console.log("ABOUT TO MAKE CHANGES TO BIKE WITH ID", id, this.bike)
      this._bikeService.updateBike(id, this.bike)
      .then(response => this.getUserBikes()).catch(err => console.log(err))
      this.getCurrentUser()
    }



}
