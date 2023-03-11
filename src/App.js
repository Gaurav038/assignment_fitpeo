import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar.js"
import Widget from "./components/navbar/Widget.js"
import Featured from "./components/featured/Featured"
import Barchart from "./components/Graph/Bar/Bar"
import DaunutChart from "./components/Graph/DaunutChart"
import ProfileCard from "./components/profile/ProfileCard.js"

import './App.css';
import LineChart from "./components/Graph/line/LineChart";
import TopProduct from "./components/topProduct/TopProduct";
import { useState } from "react";

function App() {

  const [show, setShow] = useState(false)
  
  const toggleBtn = () => {
      setShow((curr) => !curr)
  }
  return (
    <div className="home">
      <Sidebar show={show} />

      <div className="homeContainer">
          <Navbar toggleBtn={toggleBtn} />
          <div className="dataContainer">
            <div className="leftSide">
              <div className="widgets">
                <Widget />
                <Widget />
                <Widget />
              </div>
              <div className="charts">
                <Featured />
                <Barchart />
              </div>
              <div className="widgets">
                <LineChart />
                <DaunutChart />
                <TopProduct />
              </div>
            </div>

            <ProfileCard />
          </div>
      </div>
  </div>
  );
}

export default App;
