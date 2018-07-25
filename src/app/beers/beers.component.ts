import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from '../../app/services/beer-service.service'
import { Beer } from '../models/beer'

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beerlist:any
  beerArray:any;


  beer: Beer = {
    beer:{
      name:"Red Rye",
      brewery:"Founder's",
      breweryLocation:"Grand Rapids, MI",
      style:"IPA",
      abv:4,
      rating:[3],
      validatedByBrewer:false
    }
  }

  constructor(public service: BeerServiceService) { }

  ngOnInit() {
    // this.addBeer(this.beer)
    this.editBeer(this.beer)
  }

  addBeer = (data) =>{
    this.service.addBeer(data).subscribe()
  }

  getOneBeer = (id) => {
    this.service.getOneBeer(id).subscribe((beer) => {
      console.log("beer: ",beer)
      
    })
  }

  editBeer = (data) => {
    this.service.editBeer(data, 5).subscribe()
  }

  searchBeer = (query) => {
    this.service.searchBeer(query).subscribe((beers) => {
      console.log("searched beers: ",beers)
    })
  }

  deleteBeer = (id) => {
    this.service.deleteBeer(id).subscribe()
  }
  
}
