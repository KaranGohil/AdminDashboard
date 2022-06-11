import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
// Tooltip allows us to hover over a component
// A content (i.e Settings) will be displayed over the component
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

// tailwindcss: flex (box) position relative and set dark background color
// zIndex:1000 will make sure that this component is always in front
const App = () => {
  const activeMenu = true;
  return (
    <div>
      {/* BrowserRouter is a parent component where the children component will be render (Ask Amaan)*/}
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                style={{ background: "black", borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element="ECommerce" />
              <Route path="/ecommerce" element="ECommerce" />
              {/* Pages */}
              <Route path="/orders" element="Orders" />
              <Route path="/Employees" element="Employees" />
              <Route path="/Customers" element="Customers" />
              {/* Apps */}
              <Route path="/kanban" element="Kanban" />
              <Route path="/editor" element="Editor" />
              <Route path="/calender" element="Calender" />
              <Route path="/color-picker" element="ColorPicker" />
              {/* Charts */}
              <Route path="/line" element="Line" />
              <Route path="/area" element="Area" />
              <Route path="/bar" element="Bar" />
              <Route path="/pie" element="Pie" />
              <Route path="/financial" element="Financial" />
              <Route path="/color-mapping" element="ColorMapping" />
              <Route path="/pyramid" element="Pyramid" />
              <Route path="/stacked" element="Stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
