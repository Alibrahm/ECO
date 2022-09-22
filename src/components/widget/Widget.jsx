import './widget.css'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function Widget() {


  return (
    <div className="widget">
      <div className="right">
     < PeopleOutlineIcon className='iconn' />
      </div>
      <div className="left">
        <span>KSH300,000</span>
        <h3>Customers Onboarded </h3>
        <br/>
        <progress id="file" value="50" max="100" > 70% </progress>
      </div>
    </div>
  )
}

export default Widget