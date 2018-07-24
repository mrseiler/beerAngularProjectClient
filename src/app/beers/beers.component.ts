import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {


  tiles=[
    {text: 'one', cols: 1, rows:2, color:'red'},
    {text: 'two', cols: 1, rows: 2, color:'red'},
    {text: 'three', cols: 1, rows: 2, color:'red'},
    {text: 'one', cols: 1, rows:2, color:'red'},
    {text: 'two', cols: 1, rows: 2, color:'red'},
    {text: 'three', cols: 1, rows: 2, color:'red'}
  ]


  constructor() { }

  ngOnInit() {
  }

}
