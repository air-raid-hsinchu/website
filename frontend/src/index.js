import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Layer1 from "./components/layer1";
import Page22 from "./components/layer2/page2-2";
import Area from "./components/layer2/area";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Layer1 />} /> 
          <Route path='detail2' element={<Page22 />} />
          <Route path='areaA' element={<Area where={'A'}/>} />
          <Route path='areaB' element={<Area where={'B'}/>} />
          <Route path='areaC' element={<Area where={'C'}/>} />
          <Route path='areaD' element={<Area where={'D'}/>} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);