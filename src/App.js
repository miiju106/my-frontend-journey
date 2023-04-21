import "./App.css";
import "./libs/boxicons-2.1.1/css/boxicons.min.css";
// import Register from "./components/register";
// import Login from './components/login';
// import Navlogin from "./components/navlogin";
import Mainlayout from "./pages/mainlayout";
import Dashboard from "./pages/dashboard";
import Blank from "./pages/blank";
import Sidebar from "./components/sidebar"

// import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (  
        
      <BrowserRouter>
        {/* <Sidebar/> */}
        <Routes>
        <Route path="/" element={<Mainlayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="tasks" element={<Blank />} />
                    <Route path="language" element={<Blank />} />
                    <Route path="customers" element={<Blank />} />
                    <Route path="settings" element={<Blank />} />
                    
                </Route>
          
        </Routes>
      </BrowserRouter>
   
  );
}
{/* <Route exact path="/">
            <Mainlayout />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/tasks">
            <Blank />
          </Route>
          <Route exact path="/language">
            <Blank />
          </Route>
          <Route exact path="/customers">
            <Blank />
          </Route>
          <Route exact path="/settings">
            <Blank />
          </Route> */}

export default App;
