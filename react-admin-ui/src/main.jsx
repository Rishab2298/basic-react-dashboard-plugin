// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css"; // Required to trigger app.css build


// document.addEventListener("DOMContentLoaded", () => {
  
//   const root = document.getElementById("root");
//   if (root) {
//     ReactDOM.createRoot(root).render(<App />);
//   } else {
//     console.error("❌ No #react-admin-root element found. Make sure your WordPress plugin outputs <div id='react-admin-root'></div> in the admin page.");

//   }
// });

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<App />);
} else {
  console.error("❌ No #root element found.");
}
