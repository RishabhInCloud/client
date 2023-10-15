
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login&SignUp/Login/login";
import SignUpPage from "./components/Login&SignUp/SignUp/signup";
import ForgotPassword from "./assets/Pages/ForgotPassword/ForgotPassword";
import Home from "./components/Category/Home/Home";
import Course from "./components/Category/Student Page/Course";
import Instructor from "./components/Category/Instructor/Main";
import NoPage from "./assets/Pages/Nopage/Nopage";
import Layout from "./Layout";
import MainCoursePage from "./components/Category/Course/MainCoursePage.jsx"
import PasswordChange from "./assets/Pages/ForgotPassword/passwordChange";
import OTP from "./assets/Pages/ForgotPassword/OTP";
import About from "./components/AboutUs/About";
import AdminHome from "./admin/AdminHome";
import LandingAdmin from "./admin/LandingAdmin";

function App() {
    return <div>
    <BrowserRouter >
      <Routes>
          <Route   path="/" element={  <Layout>    <Home />    </Layout>  } />
          <Route   path="Home" element={  <Layout>    <Home />    </Layout>  } />
          <Route  path="/course" element={ <Layout> <Course/> </Layout> } /> 
          <Route  path="/courses" element={ <Layout> <MainCoursePage/> </Layout> } /> 
          <Route  path="/mentors" element={ <Layout> <Instructor/> </Layout> } /> 
        <Route path="signin" element={<LoginPage/>} />
        <Route path="signup" element={<SignUpPage/>} />
        <Route path="forgot-password" element={<ForgotPassword/>}/>
        <Route path="otp" element={<OTP/>}/>
        <Route path="passwordChange" element={<PasswordChange/>}/>
        <Route path="aboutUs" element={<About/>}/>
       <Route path = "/admin" element = {<LandingAdmin/>}/>

          <Route path="*" element={<NoPage />} />
        </Routes>
        </BrowserRouter>
    </div>
}
export default App;
