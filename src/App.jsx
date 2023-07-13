import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import DashBoard from "./Pages/DashBoard";
import Properties from "./Pages/Properties";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./Pages/Jobs";
import Contractor from "./Pages/Contractor";
import Setting from "./Pages/Setting";
import Reports from "./Pages/Reports";
import Finance from "./Pages/Finance";
import Calender from "./Pages/Calender";
import Login from "./Pages/Login";
import ReportsAddSubscription from "./Pages/ReportsAddSubscription";
import FinanceContractorInvoice from "./Pages/FinanceContractorInvoice";
import FinanceLandlordInvoice from "./Pages/FinanceLandlordInvoice";
import Events from "./Pages/Events";
import Subscription from "./Pages/Subscription";
import FinanceContractorInvoiceClose from "./Pages/FinanceContractorInvoiceClose";

function App() {
  const [selectedContent, setSelectedContent] = useState("content1");

  const handleItemClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="w-100">
      {/* csdcsd */}
      <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/job" element={<Jobs />} />
          <Route path="/contractor" element={<Contractor />} />

          <Route path="/setting" element={<Setting />} />
          <Route path="/report" element={<Reports />} />
          <Route path="/report/events" element={<Events />} />
          <Route path="/report/subscription" element={<Subscription />} />
          <Route path="/report/events/subscription" element={<ReportsAddSubscription />} />
        
          <Route path="/finance" element={<Finance />}></Route>
          <Route
            path="/finance/contractor-invoice"
            element={<FinanceContractorInvoice />}
          />
          <Route
            path="/finance/contractor-invoice/close"
            element={<FinanceContractorInvoiceClose />}
          />
          <Route
            path="/finance/landlord-invoice"
            element={<FinanceLandlordInvoice />}
          />

          <Route path="/login" element={<Login />}></Route>
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </Router>
      {/* <DashBoard/> */}
      {/* <div className="">
        <div className="flex flex-col lg:flex-row">
          <Sidebar
            handleItemClick={handleItemClick}
            selectedContent={selectedContent}
          />
          <Dashboard selectedContent={selectedContent} />
        </div>
      </div> */}
    </div>
  );
}

export default App;
