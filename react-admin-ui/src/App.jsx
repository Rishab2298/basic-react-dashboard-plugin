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
      <div className="p-6 space-y-6">
        {/* Navigation */}
        <div className="flex gap-4">
          <Link to="/">
            <Button>Dashboard</Button>
          </Link>
          <Link to="/shipping">
            <Button>Shipping</Button>
          </Link>
          <Link to="/inventory">
            <Button>Inventory</Button>
          </Link>
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
