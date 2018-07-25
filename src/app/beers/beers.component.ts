import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
