import React, { useEffect, useState } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import "./Bar.css"


function Barchart() {  
  
  var data = {
    labels: ["Jan", "Feb", "Mar" , "Apr", "May", "Mar" , "Apr", "May", "Apr", "May", "Mar" , "Apr", "May"],
    datasets: [{
      data: ['15', '85', '65' , '45', '44','85', '65' , '45', '44', '44','85', '65' , '45', '44'],
      backgroundColor: [
        'rgba(54, 162, 235, 0.8)'
      ],
      borderWidth: 1,
      barThickness: 18,             
    }]
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
      <div className='chartBody' style={{height: '296px',width: '70%'}}>
          <div className="selectBody">
            <span>
              <b>Sort By</b> : yearly
            </span>
        </div>
        
        <div style={{height: '280px'}}>
          <Bar
            data={data}
            options={options}
          />
        </div>
      </div>
    )
  }
  
  export default Barchart