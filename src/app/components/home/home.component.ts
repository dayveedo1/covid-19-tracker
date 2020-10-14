import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from 'src/app/model/global-data';
import { DataService } from 'src/app/service/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  globalData : GlobalDataSummary[];

  loading = true;

  constructor(private service: DataService) { }

  ngOnInit() {

    this.service.getGlobalData().subscribe(
      {
        next: (result) => {
          console.log(result);
          this.globalData = result;

          result.forEach(cs => {

            if (!Number.isNaN(cs.confirmed)) {
              this.totalActive += cs.active
              this.totalConfirmed += cs.confirmed
              this.totalDeaths += cs.deaths
              this.totalRecovered += cs.recovered

              this.loading = false;
            }
          

          })

        }
      }
    )
  }

}
