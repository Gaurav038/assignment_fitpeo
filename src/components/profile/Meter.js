import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";


function Meter() {
  return (
    <div className='meter' >
    <div className='meter-icon'>
        <div>Earning</div>
        <NotificationsNoneOutlinedIcon className="icon" />
    </div>
    <CircularProgressbar
      value='50'
      text={`50 %`}
      circleRatio={0.7} /* Make the circle only 0.7 of the full diameter */
      styles={{
        trail: {
          strokeLinecap: 'round',
          transform: 'rotate(-126deg)',
          transformOrigin: 'center center',
        },
        path: {
          strokeLinecap: 'round',
          transform: 'rotate(-126deg)',
          transformOrigin: 'center center',
          stroke: '50',
        },
        text: {
          fill: '#ddd',
        },
      }}
      strokeWidth={6}
    />

    <div style={{fontSize: '18px'}} >$4545.21</div>
    <small style={{color: 'grey'}}>Earning this month</small>
    <small style={{color: 'grey'}}>$4545.21 from previous period</small>
  </div>
  )
}

export default Meter