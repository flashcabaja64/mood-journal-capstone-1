import React, { Component } from 'react';
import MoodContext from '../MoodContext/MoodContext'
import { Bar } from 'react-chartjs-2';
import './MiscChart.css'

export default class MiscChart extends Component {
  static contextType = MoodContext

  render() {
    const { entries } = this.context;
    let hoursTotal = entries.map(entry => entry.duration).reduce((a, b) => a + b, 0);
    let entryTotal = entries.map(entry => entry).length

    const chartData = {
      datasets: [{
        label: 'Hours',
        data: [hoursTotal],
        backgroundColor: [
          'rgba(249, 169, 220, 1)',
        ],
      },
      {
        label: 'Entries',
        data: [entryTotal],
        backgroundColor: [
          'rgba(140, 138, 255, 1)',
        ],
      }]
    };

    const chartOptions = {
      scales: {
        yAxes: [{
          gridLines: {
            display: false,
            color: 'white',
            offsetGridLines: true
          },
          ticks: {
            fontColor: 'white',
            beginAtZero: true,
          }
        }],
        xAxes: [{
          barPercentage: 0.5,
          gridLines: {
            display: false,
            color: 'white',
            offsetGridLines: true
          }
        }]
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontSize: 15,
          fontColor: 'white'
        }
      },
      title: {
        display: true,
        text: 'Misc. Totals',
        fontSize: 40,
        fontColor: 'white',
        fontFamily: 'Comfortaa'
      },
      responsive: true,
      maintainAspectRatio: false,
    };

    return (
      <div className="misc-chart" style={{position: 'relative'}}>
        <Bar 
          data={chartData}
          width={300}
          height={350}
          options={chartOptions}
        />
      </div>
    )
  }
}