import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { BeerServiceService } from '../../services/beer-service.service'
import { UserbeerService } from '../../services/userbeer.service'

@Component({
  selector: 'app-userbeerdialog',
  // template: 'passed in {{name}}',
  templateUrl: './userbeerdialog.component.html',
  styleUrls: ['./userbeerdialog.component.css']
})
export class UserbeerdialogComponent implements OnInit {

  ngOnInit() {
    
  }
  userbeer: any;

  name: string
  locationhad: string
  rating: number 

  constructor(public dialogRef: MatDialogRef<UserbeerdialogComponent>,
              private service:BeerServiceService,
              private userBeerService: UserbeerService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  onSubmit():void{
    this.userbeer={
      userbeer:{
        name:this.data.name,
        locationhad:this.locationhad,
        rating:this.rating
      }
    }
    this.addUserBeer(this.userbeer);
    
    location.reload();
    this.close();
  }

  close():void{
    this.dialogRef.close()
  }
  addUserBeer = (data) =>{
    this.userBeerService.create(data).subscribe((res)=>{
      this.editRating(this.data.name, this.rating)
    },
    err => {console.log(err)})
  }
  editRating = (name, rate) => {
    let 
      beer={
        rating:rate
      }
    
    this.service.editRating(name, beer).subscribe((res) => {
    },
    err => {console.log(err)})
  }
}

