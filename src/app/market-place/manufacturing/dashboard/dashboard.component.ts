import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chartOptions = {
    animationEnabled: true,
    // title: {
    //   text: 'Manufacturing order',
    // },
    axisX: {
      tickThickness: 0,
      interval: 1,
      labelAngle: 130,
      intervalType: 'month',
      valueFormatString: 'MMMM',
    },
    toolTip: {
      shared: true,
      cornerRadius: 4,
    },
    axisY: {
      title: 'Quantity',
      titleFontColor: 'grey',
      margin: 20,
      lineThickness: 0,
      tickThickness: 0,
      interval: 0.25,
      maximum: 2,
    },
    legend: {
      verticalAlign: 'bottom',
      horizontalAlign: 'bottom',
      reversed: true,
    },
    dataPointWidth: 5,

    data: [
      {
        name: 'Draft ',
        showInLegend: true,
        type: 'stackedColumn100',
        color: '#EB0000',
        dataPoints: [
          { x: new Date(2024, 0), y: 0.05 },
          { x: new Date(2024, 1), y: 0.05 },
          { x: new Date(2024, 2), y: 0.05 },
          { x: new Date(2024, 3), y: 0.05 },
          { x: new Date(2024, 4), y: 0.05 },
          { x: new Date(2024, 5), y: 0.05 },
          { x: new Date(2024, 6), y: 0.05 },
          { x: new Date(2024, 7), y: 0.05 },
          { x: new Date(2024, 8), y: 0.05 },
          { x: new Date(2024, 9), y: 0.05 },
          { x: new Date(2024, 10), y: 0.05 },
          { x: new Date(2024, 11), y: 0.05 },
        ],
      },
      {
        name: 'Confirmed ',
        showInLegend: true,
        type: 'stackedColumn100',

        color: '#176BFF',
        dataPoints: [
          { x: new Date(2024, 0), y: 0.02 },
          { x: new Date(2024, 1), y: 0.02 },
          { x: new Date(2024, 2), y: 0.02 },
          { x: new Date(2024, 3), y: 0.02 },
          { x: new Date(2024, 4), y: 0.02 },
          { x: new Date(2024, 5), y: 0.02 },
          { x: new Date(2024, 6), y: 0.02 },
          { x: new Date(2024, 7), y: 0.02 },
          { x: new Date(2024, 8), y: 0.02 },
          { x: new Date(2024, 9), y: 0.02 },
          { x: new Date(2024, 10), y: 0.02 },
          { x: new Date(2024, 11), y: 0.02 },
        ],
      },
      {
        name: 'Processing',
        showInLegend: true,
        type: 'stackedColumn100',

        color: '#2FE6FF',
        dataPoints: [
          { x: new Date(2024, 0), y: 0.01 },
          { x: new Date(2024, 1), y: 0.01 },
          { x: new Date(2024, 2), y: 0.01 },
          { x: new Date(2024, 3), y: 0.01 },
          { x: new Date(2024, 4), y: 0.01 },
          { x: new Date(2024, 5), y: 0.01 },
          { x: new Date(2024, 6), y: 0.01 },
          { x: new Date(2024, 7), y: 0.01 },
          { x: new Date(2024, 8), y: 0.01 },
          { x: new Date(2024, 9), y: 0.01 },
          { x: new Date(2024, 10), y: 0.01 },
          { x: new Date(2024, 11), y: 0.01 },
        ],
      },
      {
        name: 'Planned ',
        showInLegend: true,
        type: 'stackedColumn100',
        color: '#52EA11 ',
        dataPoints: [
          { x: new Date(2024, 0), y: 5 },
          { x: new Date(2024, 1), y: 5 },
          { x: new Date(2024, 2), y: 5 },
          { x: new Date(2024, 3), y: 5 },
          { x: new Date(2024, 4), y: 5 },
          { x: new Date(2024, 5), y: 5 },
          { x: new Date(2024, 6), y: 5 },
          { x: new Date(2024, 7), y: 5 },
          { x: new Date(2024, 8), y: 5 },
          { x: new Date(2024, 9), y: 5 },
          { x: new Date(2024, 10), y: 5 },
          { x: new Date(2024, 11), y: 5 },
        ],
      },
      {
        name: 'Done  ',
        showInLegend: true,
        type: 'stackedColumn100',

        color: '#FFFF17',
        dataPoints: [
          { x: new Date(2024, 0), y: 0.05 },
          { x: new Date(2024, 1), y: 0.05 },
          { x: new Date(2024, 2), y: 0.05 },
          { x: new Date(2024, 3), y: 0.05 },
          { x: new Date(2024, 4), y: 0.05 },
          { x: new Date(2024, 5), y: 0.05 },
          { x: new Date(2024, 6), y: 0.05 },
          { x: new Date(2024, 7), y: 0.05 },
          { x: new Date(2024, 8), y: 0.05 },
          { x: new Date(2024, 9), y: 0.05 },
          { x: new Date(2024, 10), y: 0.05 },
          { x: new Date(2024, 11), y: 0.05 },
        ],
      },

      {
        name: 'Canceled ',
        showInLegend: true,
        type: 'stackedColumn100',
        color: '#FF9217',

        dataPoints: [
          { x: new Date(2024, 0), y: 0 },
          { x: new Date(2024, 1), y: 0 },
          { x: new Date(2024, 2), y: 0 },
          { x: new Date(2024, 3), y: 0 },
          { x: new Date(2024, 4), y: 0 },
          { x: new Date(2024, 5), y: 0 },
          { x: new Date(2024, 6), y: 0 },
          { x: new Date(2024, 7), y: 0 },
          { x: new Date(2024, 8), y: 0 },
          { x: new Date(2024, 9), y: 0 },
          { x: new Date(2024, 10), y: 0 },
          { x: new Date(2024, 11), y: 0 },
        ],
      },
    ],
  };
  chartOptions1 = {
    animationEnabled: true,
    // title: {
    //   text: 'Work Orders',
    // },
    axisY: {
      minimum: 0,
      interval: 0.25,
      maximum: 1.25,
    },
    toolTip: {
      shared: true,
    },
    legend: {},
    data: [
      {
        borderColor: 'black', // Add border color for columns

        type: 'column',
        name: 'Manufacturing order',
        legendText: 'Manufacturing order',
        showInLegend: true,
        dataPoints: [
          { label: 'UF00126', y: 0.35, color: 'blue' },
          { label: 'UF00126', y: 1, color: 'blue' },
          { label: 'UF00126', y: 0.35, color: 'blue' },
        ],
      },
    ],
  };
}
