import React from 'react';
// import './sidebar.scss'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import logo from '../assets/eco.png'
import { Cart, Chat, Notification, UserProfile } from '.';
import avatar from '../data/avatar.jpg';
import { userProfileData } from '../data/dummy';
import { links } from '../data/dummy';
import { useLocation } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import PaymentIcon from '@mui/icons-material/Payment';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const { currentColor, activeMenu,isClicked, setActiveMenu, screenSize } = useStateContext();

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-dark dark:text-gray-600 dark:hover:text-black ';

  return (
    
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-black text-slate-900">
            {/* <img  */}
            <div className="flex gap-x-4 items-center">
          <img src={logo} clasName="logo" alt="Burn Logo" 
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            
          />
          
         
        </div>
            </Link>
            
          
            {/* <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent> */}
          </div>
          <div className="mt-10 ">
          <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="h-10 w-10 rounded-full"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="text-sm font-semibold text-slate-900"> Martin Mwanzo  </p>
          {/* <p className="text-gray-400 text-14">  Administrator   </p> */}
          <p className="text-sm text-slate-800 truncate"> martinmwanzo@burnmfg.com</p>

         
        </div>
      </div>
      {/* <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">{person.name}</p>
        <p class="text-sm text-slate-500 truncate">{person.email}</p>
      </div> */}

      {/* This creates the horizontal line */}
      {/* <div> */}
      {/* 👇️ colored horizontal line */}
      {/* <hr
        style={{
          background: 'black',
          color: 'lime',
          borderColor: 'black',
          height: '1px',
        }}
      />
      </div> */}
            {/* {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
              
            ))} */}
           <div class="w3-container">
              
        {/* <div className="profile">
          <img src={avatar} alt="" />
          <h5>Martin Mwanzo <br /> <p>martinmwanzo@burnmfg.com</p></h5>
        </div> */}
        
      <div className="mt-1 ">

        <ul>
        
          <li className={splitLocation[1] === "" ? "active" : ""}>
          <Link to="/business"> 
          <BusinessIcon className='icon'  />
            <span className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-xl">Business Summary</span></Link>
          </li>
          

          
          <li className={splitLocation[1] === "customer" ? "active" : ""}>

          <Link to="">  <GroupsIcon className='icon' />
             <span className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-xl">Customers</span></Link>
          </li>
          

          <li>
          <Link to="/customer">
            
            <ViewQuiltIcon className='icon' />
            <span  className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-xl">Devices</span>
          </Link>
          </li>
          <li>
          <Link to="">
            <PaymentIcon className="icon" />
            <span  className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-xl">Payments</span>
          </Link>

          </li>

          <li>
          <Link to="/customer">

            <ShowChartIcon className='icon' />
            <span  className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-xl" >Loans</span>
          </Link>

          </li>
          <li>
          <Link to="/customer">

            <ChatBubbleOutlineIcon className='icon' />
            <span className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-xl">Communication</span>
          </Link>

          </li>
          {/* <li>
          <Link to="/customer">

            <PrecisionManufacturingIcon className='icon' />
            <span className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-xl">Production</span>
            </Link>
          
          </li> */}
          <li>
          <Link to="/customer">

            <LocalShippingIcon className='icon' />
            <span className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-l">Delivery</span>
          </Link>

          </li>
          {/* <hr /> */}
          <li>

          <Link to="/customer">

            <SettingsIcon className='icon' />
            <span className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-xl">Settings</span>
          </Link>

          </li>
          <li>
          <Link to="/customer">

            <LogoutIcon className='icon' />
            <span className="text-slate-800 dark:text-slate-700 hover:text-orange-600 m-5 mt-5 text-xl">Logout</span>
          </Link>

          </li>
        </ul>
        {/* <NavLink
                   
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink> */}
      </div>
    </div>
    </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
