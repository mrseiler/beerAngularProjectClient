import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from '../../services/beer-service.service';
import { MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-beer-dialog-box',
  templateUrl: './beer-dialog-box.component.html',
  styleUrls: ['./beer-dialog-box.component.css']
})
export class BeerDialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BeerDialogBoxComponent>,
              private service:BeerServiceService) { }

  name:string;
  brewery:string;
  breweryLocation:string;
  style:string;
  abv:number;
  beer:any;
  

  ngOnInit() {}

  onSubmit():void{
    this.beer={
      beer:{
        name:this.name,
        brewery:this.brewery,
        breweryLocation:this.breweryLocation,
        style:this.style,
        abv:this.abv
      }
    }
    this.addBeer(this.beer);
    
    location.reload();
  }
  
  close():void{
    this.dialogRef.close()
  }
  addBeer = (data) =>{
    this.service.addBeer(data).subscribe()
  }
}
