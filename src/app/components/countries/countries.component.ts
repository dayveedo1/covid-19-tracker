import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from 'src/app/model/global-data';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  loading = true;

  totalConfirmed;
  totalActive;
  totalDeaths;
  totalRecovered;

  data: GlobalDataSummary[];
  country: String[] = [];

  constructor(private service: DataService) { }

  ngOnInit() {

    this.service.getGlobalData().subscribe(res => {
      this.data = res;

      res.forEach(x => {
        this.country.push(x.country);
        this.loading = false;
        
      })
    })
  }

  updateValue(country : string){
    console.log(country);

    this.data.forEach(x => {
      if(x.country === country){
        this.totalActive = x.active;
        this.totalConfirmed = x.confirmed;
        this.totalDeaths = x.deaths;
        this.totalRecovered = x.recovered;
      }
      
    })
  }

}
