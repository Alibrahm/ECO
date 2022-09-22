import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Home from "./pages/home/Home"


import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Stacked, Pyramid, Customers, Line, Area, Bar, Pie, Financial, ColorMapping } from './pages';
import './App.css';
import Customerprofile from "./pages/customerlog/Customerprofile";
import PaymentHistory from "./pages/payments/PaymentHistory";
import Device from "./pages/devices/Device";
import { useStateContext } from './contexts/ContextProvider';
import Business from './pages/Business';



const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (

    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar  bg-secondary-dark-bg dark:bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-white bg-white">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              
              <Navbar />
            </div>
    {/* <div className="App"> */}

            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboards  */}
                <Route path="/" element={(<Home />)} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />
                {/* <Route path="/profile" element={(<Customerprofile />)} /> */}
                <Route path="profile/:id">
                <Route index element={< Customerprofile/>}/>
                <Route path="payments"  element={<PaymentHistory/>}></Route>
              <Route path="devices"  element={<Device/>}></Route>
                </Route>

                {/* <Route path="/home" element={(<Home />)} /> */}

                {/* <Route path="/orders" element={<Orders />} /> */}
                <Route path="/business" element={<Business/>} />
                <Route path="/customes" element={<Customers />} />

                {/* apps  */}
                {/* <Route path="/kanban" element={<Kanban />} /> */}
                {/* <Route path="/editor" element={<Editor />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
                {/* <Route path="/color-picker" element={<ColorPicker />} /> */}

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
            <Footer />
          </div>
    {/* </div> */}

        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
