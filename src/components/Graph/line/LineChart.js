import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';
import './line.css'

function LineChart() {
    var data = {
        labels: ["Jan", "Feb", "Mar" , "Apr", "May"],
        datasets: [
          {
            data: [33, 53, 25, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            data: [13, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "yellow"
          }
        ]
      };
      
      var options = {
        maintainAspectRatio: false,
        scales: {
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
      
        return (
          <div className='lineBody' style={{height: '250px'}}>
            
            <div className="selectBody">
              <span>
                User Activity
              </span>
              <span>
                Weekly
              </span>
            </div>
            <p className="title">This month</p>
            <p className="amount">$420</p>

            <div style={{height: '180px'}}>
              <Line
                  data={data}
                  options={options}
              />
            </div>
          </div>
        )
}

export default LineChart