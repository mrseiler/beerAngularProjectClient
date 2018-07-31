import { Component, OnInit } from '@angular/core';
import { BeerServiceService } from '../services/beer-service.service'
import { Beer } from '../models/beer'
import { UserbeerService } from '../services/userbeer.service'
import { UserBeer } from '../models/userBeer'
import { DataService } from '../services/data.service'
import { MatDialog } from '../../../node_modules/@angular/material';
import { UserbeerdialogComponent } from '../dialogs/userbeerdialog/userbeerdialog.component'
import { BeerDialogBoxComponent } from '../DialogBoxes/beer-dialog-box/beer-dialog-box.component';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css'] 
})
export class BeersComponent implements OnInit {
  deleted:Object[] = []
  user: any;
  foundBeer:any;
  searchTerm: string;
  searchValue: string;
  locationhad: string;
  rating: number;
  comment: string;
  currentUser: any;
  beerlist:any
  beerArray:any;
  userBeerArray:any;
  searchedUserBeers:any;
  searchedBeers:any;
  userbeer:any
  display:Boolean = true;
  whatToDisplay:any;
  page:number = 1;
  totalPages:number;

  addButtonDisplay(name){
    for(let beer of this.userBeerArray){
      if (beer.name == name){
        return false
      }
    }
    return true;
  }
    
  constructor(private service: BeerServiceService,
              private userbeerservice: UserbeerService,
              private dataService: DataService,
              public dialog: MatDialog,
              public userBeerDialog: MatDialog
              ) {}

  ngOnInit() {
    this.userBeerGetAll()
    this.getBeers(this.page)
  }
  toggleButton() {
    
  }

  executeSearch(searchValue, searchTerm){
    this.searchBeer(searchValue, searchTerm);
    
  }
  setWhere=(item)=>{
    this.searchValue=item
    
  }
  buttonsPressed = function(term):void{
    this.whatToDisplay = term;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(BeerDialogBoxComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }


  userBeerOpenDialog(name): void {
    const dialogRef = this.userBeerDialog.open(UserbeerdialogComponent, {
      data: { name: name}
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getBeers = (page) => {
    this.service.getBeers(page).subscribe((beers) => {
      this.beerArray = Object.values(beers)
      this.whatToDisplay = Object.values(beers)
      console.log(beers)
    })
  }

  addBeer = (data) => {
    this.service.addBeer(data).subscribe()
  }

  getOneBeer = (id) => {
    this.service.getOneBeer(id).subscribe((beer) => {
      this.foundBeer=beer;
    })
  }

  editBeer = (data) => {
    this.service.editBeer(data, data.id).subscribe()
  }

  searchBeer = (value, term) => {
    this.service.searchBeer(value, term).subscribe((beers) => {
      this.searchedBeers = Object.values(beers)
      this.whatToDisplay = this.searchedBeers
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
      this.foundBeer = beer;
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
  userBeerDelete = (name) => {
    this.userbeerservice.delete(name).subscribe(data => {
      this.deleted.push(data)
      location.reload()
    })
  }

  addToMyList = (beer, location, rating, comment) => {
    this.userbeer = {
      userbeer: {
        name: beer.name,
        locationhad: location,
        rating: rating,
        comment: comment
      }
    }
    this.userBeerCreate(this.userbeer)
  }

  getUser() {
    this.user = function () {
    }
  }

}
