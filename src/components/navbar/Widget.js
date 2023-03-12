import "./widget.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = () => {

  return (
    <div className="widget">
      <div> 
        <PersonOutlinedIcon
            className="icon"
            style={{
              color: "white",
              backgroundColor: "rgb(100,149,237)",
            }}
        />
      </div>

      <div className="widget-container">
        <div className="left">
          <span className="title">Revenue</span>
          <span className="counter">
            $45,48
          </span>
        </div>

        <div className="right">
          <div className="percentage positive">
            + 457 %
          </div>
        </div>

      </div>

    </div>
  );
};

export default Widget;