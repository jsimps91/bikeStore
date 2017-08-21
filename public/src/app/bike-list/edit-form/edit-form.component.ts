import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../../bike'
import { BikeService } from './../../bike.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @Input() b;
  bikes;
  editBike = new Bike();
  currentUser;

  constructor(private _router: Router, private _bikeService: BikeService) { }

  ngOnInit() {
    this.getCurrentUser()
    this.getUserBikes()
    this.editBike = this.b;
  }
  getCurrentUser() {
    console.log("ABOUT TO GET CURRENT USER")
    this._bikeService.getCurrentUser()
      .then((response) => {
        console.log("CURRENT USER", response)
        this.currentUser = response.currentUser
      })
  }
  getUserBikes() {
    console.log("ABOUT TO GET USER BIKES")
    this._bikeService.getUserBikes()
      .then((response) => {
        console.log("USER BIKES", response)
        this.bikes = response.bikes
      })
  }
  deleteBike(id) {
    console.log("ABOUT TO DELETE BIKE WITH ID", id)
    this._bikeService.deleteBike(id)
      .then(response => this.getUserBikes()).catch(err => console.log(err));


  }
  updateBike(id) {
    console.log("ABOUT TO MAKE CHANGES TO BIKE WITH ID, EDIT", id, this.editBike)
    this._bikeService.updateBike(id, this.editBike)
      .then(response => this.getUserBikes()).catch(err => console.log(err))
    this.getCurrentUser()
  }
}
