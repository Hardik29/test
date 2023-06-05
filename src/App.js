import './App.css';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import SignUpProfile from './Pages/SignUpProfile';
import { Routes, Route } from "react-router-dom";
import SignUpTeam from './Pages/SignUpTeam';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import DashboardProfile from './Pages/Dashboard/DashboardProfile';
import DashboardTeam from './Pages/Dashboard/DashboardTeam';
import RequireAuth from './component/ReqAuth';
import FrgtPwd from './Pages/FrgtPwd';
import ResetPwd from './Pages/ResetPwd';

function App() {
  return (
    <div className="App font-BrinnanRegular">
      <Routes>

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupProfile" element={<SignUpProfile />} />
        <Route path="/signupTeam" element={<SignUpTeam />} />
        <Route path="/signupTeam" element={<SignUpTeam />} /> 
        <Route path="/frgtpwd" element={<FrgtPwd/>} />
        <Route path="/resetpassword/:token" element={<ResetPwd/>} />

        <Route element={<RequireAuth />} >
          <Route path="/dashboardhome" element={<DashboardHome />} />
          <Route path="/dashboardProfile" element={<DashboardProfile />} />
          <Route path="/dashboardTeam" element={<DashboardTeam />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
