import React, {Component} from 'react';
import * as c3 from "c3";
import "c3/c3.min.css";
import './Graph.css';

class Graph extends Component {
  componentDidMount() {
    this._updateChart();
  }

  componentDidUpdate() {
    this._updateChart();
  }

  _updateChart() {
    const data = {
      x: 'time',
      columns: [
        [
          'time', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'
        ],
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    };

    const axis = {
      x: {
        label: {
          text: 'Time',
          position: 'outer-center'
        },
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d'
        }
      },
      y: {
        label: {
          text: 'Y Label',
          position: 'outer-middle'
        }
      }
    };

    c3.generate({
      bindto: '#chart',
      data,
      axis: axis
    });
  }

  render() {
    return (<div id="chart"></div>);
  }
}

export default Graph;
