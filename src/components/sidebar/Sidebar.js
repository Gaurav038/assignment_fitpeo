import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = ({show}) => {

    return (
      <div className={`${show ? 'showNav sidebar' : 'sidebar'}`} >
        <div className="top">
            <span className="logo">lamadmin</span>
        </div>
        <hr />
        <div className="center">
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
            <p className="title">Application</p>
            <div>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Calender</span>
              </li>
            </div>
            <div>
              <li>
                <StoreIcon className="icon" />
                <span>Chat</span>
              </li>
            </div>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className="icon" />
              <span>FileManager</span>
            </li>
            <p className="title">Layout</p>
            <li>
              <InsertChartIcon className="icon" />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className="icon" />
              <span>Notifications</span>
            </li>
            <p className="title">Pages</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className="icon" />
              <span>Settings</span>
            </li>
            <p className="title">Components</p>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Element</span>
            </li>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Form</span>
            </li>
          </ul>
        </div>
        <div className="bottom">
          <div
            className="colorOption"
          ></div>
          <div
            className="colorOption"
          ></div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;