import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login.js";
import SchedulerDashboard from "./pages/dashbord.js";
import Schedule from "./pages/schedule.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/dashboard" element={<SchedulerDashboard />}></Route>
      <Route path="/schedule" element={<Schedule />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
