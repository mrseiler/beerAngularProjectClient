import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from '../../app/services/beer-service.service'
import { Beer } from '../models/beer'

export interface Tile {
    color: string;
    cols: number;
    rows: number;
    textTitle: string;
  } 
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
  
    tiles: Tile[] = [
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
      {textTitle: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    ];

  constructor(public service: BeerServiceService) { }

  ngOnInit() {
    // this.addBeer(this.beer)
    // this.editBeer(this.beer)
    this.getBeers()
  }
  getBeers = () => {
    this.service.getBeers().subscribe((beers) => {
      Object.values(beers).map((beer) => {
        console.log(beer)
      })
    })
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
