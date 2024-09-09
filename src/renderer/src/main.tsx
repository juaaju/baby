import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import Cam from "./Cam";
import Result from "./Result";
import {MemoryRouter, HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />}>
        </Route>
         <Route path="camera" element={<Cam/>} />
         <Route path="result" element={<Result/>}></Route>
      </Routes>
    </MemoryRouter>
);
