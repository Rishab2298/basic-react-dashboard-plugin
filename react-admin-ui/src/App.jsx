import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useNavigate,
} from "react-router-dom";

import { Button } from "@/components/ui/button";
import Dashboard from "./pages/dashboard";
import Shipping from "./pages/shipping";
import Inventory from "./pages/inventory";
import { useEffect } from "react";



export default function App() {
  return (
    <HashRouter>
<div className="sm:p-[40px] p-[15px]">
        {/* Navigation */}
     <div className="w-full overflow-x-auto">
  <div className="flex w-fit gap-4 pb-3 ">
    <Link to="/">
      <Button className="whitespace-nowrap">Dashboard</Button>
    </Link>
    <Link to="/shipping">
      <Button className="whitespace-nowrap">Shipping</Button>
    </Link>
    <Link to="/inventory">
      <Button className="whitespace-nowrap">Inventory</Button>
    </Link>
  </div>
</div>


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/inventory" element={<Inventory />} />
          {/* This will handle redirect based on WordPress ?page=... */}
      
        </Routes>
      </div>
    </HashRouter>
  );
}

// function RedirectFromWpQuery() {
//   const page = new URLSearchParams(window.location.search).get("page");

//   if (page === "woo-dash-shipping" && window.location.hash !== "#/shipping") {
//     return <Navigate to="/shipping" replace />;
//   }

//   if (page === "woo-dash-inventory" && window.location.hash !== "#/inventory") {
//     return <Navigate to="/inventory" replace />;
//   }

//   return <Navigate to="/" replace />;
// }
