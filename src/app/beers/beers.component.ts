import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from '../services/beer-service.service'
import { Beer } from '../models/beer'
import { UserbeerService } from '../services/userbeer.service'
import { UserBeer } from '../models/userBeer'
import { DataService } from '../services/data.service'
// import { AddArrayPipe } from '../../app/add-array.pipe'

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  user:any;
  locationhad:string;
  rating:number;
  comment:string;
  currentUser: any;
  beerlist:any
  beerArray:any;
  userBeerArray:any;
  searchedUserBeers:any;
  searchedBeers:any;
  userbeer:UserBeer;
  display:Boolean = true;
  beer: Beer = {
    beer:{
      name:"Tom's Beer",
      brewery:"Founder's",
      breweryLocation:"Grand Rapids, MI",
      style:"IPA",
      abv:4,
      rating:[3, 4, 5, 6, 2],
      validatedByBrewer:false
    }
  }

  // addButtonDisplay(beer){
  //   if()
  // }
  
    
  constructor(private service: BeerServiceService,
              private userbeerservice: UserbeerService,
              private dataService: DataService,
              ) {
    // this.beerArray = this.getBeers()
    
   }

  ngOnInit() {
    this.addBeer(this.beer)
    // this.editBeer(this.beer)
    this.getBeers()
    // this.currentUser = this.dataService.getUser().subscribe();
    console.log(this.currentUser)
  }
  getBeers = () => {
    this.service.getBeers().subscribe((beers) => {
    this.beerArray = Object.values(beers)
    })
    // console.log(this.beerArray)
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
    this.service.editBeer(data, data.id).subscribe()
  }

  searchBeer = (query) => {
    this.service.searchBeer(query).subscribe((beers) => {
      this.searchedBeers = Object.values(beers)
    })
  }

  deleteBeer = (id) => {
    this.service.deleteBeer(id).subscribe()
  }
  
  userBeerCreate = (data) => {
    this.userbeerservice.create(data).subscribe()
  }
  userBeerGetOne = (name) => {
    this.userbeerservice.getOne(name).subscribe((beer) => {
      console.log(beer)
    })
  }
  userBeerGetAll = () => {
    this.userbeerservice.getAll().subscribe((beers) => {
      this.userBeerArray = Object.values(beers)
    })
  }
  userBeerSearch = (query) => {
    this.userbeerservice.search(query).subscribe((beers) => {
      this.searchedUserBeers = Object.values(beers)
    })
  }
  userBeerEdit = (data) => {
    this.userbeerservice.edit(data).subscribe()
  }
  userBeerDelete = (id) => {
    this.userbeerservice.delete(id).subscribe()
  }

  addToMyList = (beer, location, rating, comment) => {
      this.userbeer = {
        userbeer:{
          name:beer.name,
          locationhad: location,
          rating: rating,
          comment: comment
        }
    }
    this.userBeerCreate(this.userbeer)
  }

  // setUserAsBrewer(isBrewer)

  getUser(){
    this.user = function (){

    }
  }
}
