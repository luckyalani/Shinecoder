import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  sharedStatistics = {
    animationEnabled: true,
    title: {
      text: "Shared statistics"
    },
    axisX: {
      labelAngle: -90
    },
    axisY: {
      // title: "billion of barrels"
    },
    axisY2: {
      // title: "million barrels/day"
    },
    toolTip: {
      shared: true,
      cornerRadius: 40,
    },
    legend: {
      cursor: "pointer",
      color: "blue",
      itemclick: function (e: any) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        }
        else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    dataPointWidth: 20,

    data: [{
      type: "column",
      name: "Proven Oil Reserves (bn)",
      legendText: "Proven Oil Reserves",
      showInLegend: true,
      borderWidth: 0.5,
      // borderRadius: 5,
      dataPoints: [
        { label: "Mar", y: 175, color: "#0163D2" },
        { label: "Feb", y: 211, color: "#E6F0FB" },
        { label: "Mar", y: 175, color: "#E6F0FB" },
        { label: "Apr", y: 137, color: "#E6F0FB" },
        { label: "May", y: 251, color: "#0163D2" },
        { label: "Jun", y: 40, color: "#E6F0FB" },
        { label: "Jul", y: 97.8, color: "#E6F0FB" },
        { label: "Aug", y: 60, color: "#E6F0FB" },
        { label: "Sep", y: 23.3, color: "#E6F0FB" },
        { label: "Oct", y: 20.4, color: "#E6F0FB" },
        { label: "Nov", y: 20.4, color: "#0163D2" },
        { label: "Dec", y: 20.4, color: "#E6F0FB" },
      ],

    },
      //    {
      //     type: "column",	
      //     name: "Oil Production (million/day)",
      //     legendText: "Oil Production",
      //     axisYType: "secondary",
      //     showInLegend: true,
      //     dataPoints:[
      //   	  {label: "Saudi", y: 11.15},
      //   	  {label: "Venezuela", y: 2.5},
      //   	  {label: "Canada", y: 3.6},
      //   	  {label: "Iran", y: 4.2},
      //   	  {label: "Iraq", y: 2.6},
      //   	  {label: "Kuwait", y: 2.7},
      //   	  {label: "UAE", y: 3.1},
      //   	  {label: "Russia", y: 10.23},
      //   	  {label: "US", y: 10.3},
      //   	  {label: "China", y: 4.3}
      //   ]
      // }

    ]
  }

  downloadedStatistics = {
    animationEnabled: true,
    title: {
      text: "Downloaded statistics"
    },
    axisX: {
      labelAngle: -90
    },
    axisY: {
      // title: "billion of barrels"
    },
    axisY2: {
      // title: "million barrels/day"
    },
    toolTip: {
      shared: true,
      cornerRadius: 40,
    },
    legend: {
      cursor: "pointer",
      color: "blue",
      itemclick: function (e: any) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        }
        else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    },
    dataPointWidth: 20,

    data: [{
      type: "column",
      name: "Proven Oil Reserves (bn)",
      legendText: "Proven Oil Reserves",
      showInLegend: true,
      borderWidth: 0.5,
      // borderRadius: 5,
      dataPoints: [
        { label: "Mar", y: 175, color: "#0163D2" },
        { label: "Feb", y: 211, color: "#E6F0FB" },
        { label: "Mar", y: 175, color: "#E6F0FB" },
        { label: "Apr", y: 137, color: "#E6F0FB" },
        { label: "May", y: 251, color: "#0163D2" },
        { label: "Jun", y: 40, color: "#E6F0FB" },
        { label: "Jul", y: 97.8, color: "#E6F0FB" },
        { label: "Aug", y: 60, color: "#E6F0FB" },
        { label: "Sep", y: 23.3, color: "#E6F0FB" },
        { label: "Oct", y: 20.4, color: "#E6F0FB" },
        { label: "Nov", y: 20.4, color: "#0163D2" },
        { label: "Dec", y: 20.4, color: "#E6F0FB" },
      ],

    },
      //    {
      //     type: "column",	
      //     name: "Oil Production (million/day)",
      //     legendText: "Oil Production",
      //     axisYType: "secondary",
      //     showInLegend: true,
      //     dataPoints:[
      //   	  {label: "Saudi", y: 11.15},
      //   	  {label: "Venezuela", y: 2.5},
      //   	  {label: "Canada", y: 3.6},
      //   	  {label: "Iran", y: 4.2},
      //   	  {label: "Iraq", y: 2.6},
      //   	  {label: "Kuwait", y: 2.7},
      //   	  {label: "UAE", y: 3.1},
      //   	  {label: "Russia", y: 10.23},
      //   	  {label: "US", y: 10.3},
      //   	  {label: "China", y: 4.3}
      //   ]
      // }

    ]
  }

}
