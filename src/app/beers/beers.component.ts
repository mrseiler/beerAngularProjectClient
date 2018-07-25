import { Component, OnInit } from '@angular/core';
export interface Tile {
   color: string;
   cols: number;
   rows: number;
  } 
  export interface Card{
    
  }
@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {


  
    tiles: Tile[] = [
      {cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
      { cols: 1, rows: 1, color: 'lightgreen'},
    ];

  constructor() { }

  ngOnInit() {
  }

}
