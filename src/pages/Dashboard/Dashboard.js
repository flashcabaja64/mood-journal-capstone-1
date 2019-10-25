import React, { Component } from 'react';
import MoodTypeChart from '../../charts/MoodTypeChart';
import MiscChart from '../../charts/MiscChart';
import './Dashboard.css'

export default class Dashboard extends Component {

  render() {
    return(
      <div className="mood-dashboard">
        <div className="chart-1">
          <MoodTypeChart />
        </div>
        <div className="chart-2">
          <MiscChart />
        </div>
      </div>
    )
  }
}