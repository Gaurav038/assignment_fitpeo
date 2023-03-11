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
            'rgba(75,192,192,0.7)',
            'rgb(236 225 36 / 81%)',
          ],
          borderColor: [
            'rgba(75,192,192,0.8)',
            'rgb(236 225 36 / 81%)',
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
              <span>
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