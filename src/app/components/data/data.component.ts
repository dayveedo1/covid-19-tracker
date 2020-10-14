import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input('totalConfirmed')
  totalConfirmed;

  @Input('totalRecovered')
  totalRecovered;

  @Input('totalDeaths')
  totalDeaths;

  @Input('totalActive')
  totalActive;
  

  constructor() { }

  ngOnInit(): void {
  }

}
