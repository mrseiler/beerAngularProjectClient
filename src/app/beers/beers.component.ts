import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from '../../app/services/beer-service.service'

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  beerlist:any

  constructor(public service: BeerServiceService) { }

  ngOnInit() {
    this.beerlist = this.service.getBeers();
    console.log("beer: ",this.beerlist)
  }

}
