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
  globalData: GlobalDataSummary[];

  datatable = [];

  loading = true;

  chart = {
    PieChart: "PieChart",
    ColumnChart: "ColumnChart",
    LineChart: "LineChart",
    height: 500,

    options: {
      animation: {
        duration: 1000,
        easing: 'out',
      },
      is3D: true
    }
  }


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

  updateChart(input: HTMLInputElement) {
    console.log(input.value);
    this.initChart(input.value)

  }

  initChart(caseType: string) {

    this.datatable = [];
    // this.datatable.push(["Country", "Cases"])

    this.globalData.forEach(x => {
      let value: number;

      if (caseType == 'c')
        if (x.confirmed > 2000)
          value = x.confirmed

      if (caseType == 'a')
        if (x.active > 2000)
          value = x.active

      if (caseType == 'd')
        if (x.deaths > 2000)
          value = x.deaths


      if (caseType == 'r')
        if (x.recovered > 2000)
          value = x.recovered

      this.datatable.push([
        x.country, value
      ])
    })
    console.log(this.datatable);

  }


}
