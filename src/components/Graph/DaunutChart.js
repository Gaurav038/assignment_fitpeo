import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './line/line.css'

function DaunutChart() {
    var data = {
        labels: ["mon", 'Tue'],
        datasets: [{
          label: `No. of times`,
          data: [50, 10],
          backgroundColor:[
            'rgb(100,149,237)',
            'rgb(255,69,0)',
          ],
          borderWidth: 1
        }]
      };
      
      var options = {
        cutout:60,
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
          <div className='DounutBody' style={{height: '250px'}}>
            
            <div className="selectBody">
              <span className='head-bold'>
                User Activity
              </span>
              <span>
                <MoreHorizIcon />
              </span>
            </div>
    
            <div style={{height: '180px'}}>
              <Doughnut
                  data={data}
                  options={options}
              />
            </div>
          </div>
        )
}

export default DaunutChart