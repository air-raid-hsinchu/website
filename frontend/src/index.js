import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App";
import Layer1 from "./components/Layer1";
import Layer2 from "./components/Layer2";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <nav className="">
        <ul className="">
          <li className="">
            <Link to="/" className="">Home</Link>
          </li>
          <li>
            <Link to="/layer1" className="">ToDoList</Link>
          </li>
          <li>
            <Link to="/layer2" className="">layer2</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/layer1" element={<Layer1 />} />
        <Route path="/layer2" element={<Layer2 />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);