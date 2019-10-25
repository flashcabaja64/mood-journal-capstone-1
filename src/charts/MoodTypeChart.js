import React, { Component } from 'react';
import MoodContext from '../MoodContext/MoodContext'
import { Doughnut } from 'react-chartjs-2';
import EntryApiService from '../services/entry-api-service'
import './MoodTypeChart.css'

export default class MoodTypeChart extends Component {
  static contextType = MoodContext

  componentDidMount() {
    this.context.clearError()
    EntryApiService.getEntries()
      .then(this.context.setEntryList)
      .catch(this.context.setError)
  }
  
  render() {
    const { entries } = this.context

    const balancedMoodCount = entries.filter(entry => entry.mood_type === 'Balanced').length;
    const lowMoodCount = entries.filter(entry => entry.mood_type === 'Low').length;
    const extremeMoodCount = entries.filter(entry => entry.mood_type === 'Extreme').length;
    const erraticMoodCount = entries.filter(entry => entry.mood_type === 'Erratic').length;
    const unsureMoodCount = entries.filter(entry => entry.mood_type === 'Unsure').length;
    
    const chartData = {
      labels: [
        'Balanced',
        'Low',
        'Extreme',
        'Erratic',
        'Unsure'
      ],
      datasets: [{
        label: 'Mood Types',
        data:[balancedMoodCount, lowMoodCount, extremeMoodCount, erraticMoodCount, unsureMoodCount],
        backgroundColor: [
          'rgba(216, 14, 142, 1)',
          'rgba(95, 92, 255, 1)',
          'rgba(92, 255, 95, 1)',
          'rgba(168, 92, 255, 1)',
          'rgba(255, 131, 117, 1)',
          'rgba(198, 117, 255, 1)',
          'rgba(117, 214, 255, 1)'
        ]
      }]
    }
    const chartOptions = {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 15,
          fontColor: 'white'
        }
      },
      title: {
        display: true,
        text: 'Total Count Per Mood',
        fontSize: 40,
        fontColor: 'white',
        fontFamily: 'Comfortaa'
      },
      responsive: true,
      maintainAspectRatio: false,
    }

    return (
      <div className="doughnut-chart" style={{position: 'relative'}}>
        <Doughnut 
          data={chartData}
          width={300}
          height={350}
          options={chartOptions}
        />
      </div>
    )
  }
}