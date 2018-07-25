import { Component, OnInit } from '@angular/core';
import { BrewerService } from '../../app/services/brewer.service'

@Component({
  selector: 'app-brewers',
  templateUrl: './brewers.component.html',
  styleUrls: ['./brewers.component.css']
})
export class BrewersComponent implements OnInit {

  constructor(private brewerService: BrewerService) { }

  ngOnInit() {
  }
  create(data){
    this.brewerService.createBrewer(data).subscribe()
  }

  find(query){
    this.brewerService.createBrewer(query).subscribe((brewers) => {
      console.log(brewers)
    })
  }

  edit(data){
    this.brewerService.editBrewer(data).subscribe()
  }
}
