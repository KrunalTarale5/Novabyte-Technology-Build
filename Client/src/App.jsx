import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from './components/Navbar/Navbar';
import ProductsPage from "./Products/ProductsPage";
import SolutionsPage from "./Pages/SolutionsPage";
import ConsultingPage from "./Pages/ConsultingPage";
import SupportPage from "./Pages/SupportPage";
import ThinkPage from "./Pages/ThinkPage";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import Legal from "./components/Legal/Legal";
import Termsandcondition from "./components/Termsandconditon/Termsandcondition";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import FullstackDevelopment from "./components/FullstackDevelopment/FullstackDevelopment";
import MeanstackDevelopement from "./components/MeanstackDevelopement/MeanstackDevelopement";
import QAandAutomation from "./components/QAandAutomation/QAandAutomation";
import Devops from "./components/Devops/Devops";
import AgileTransformation from "./components/Services/AgileTransformation/AgileTransformation";
import ItService from "./components/Services/ItServices/ItServices";
import AndroidandIOS from "./components/Services/AndroidandIOS/AndroidandIOS";
import CloudComputing from "./components/Services/CloudComputing/CloudComputing";
import Hosting from "./components/Services/Hosting/Hosting";
import ServerSupport from "./components/Services/ServerSupport/ServerSupport";
import WebDesign from "./components/Services/WebDesing/WebDesing";
import WebDevelopment from "./components/Services/WebDevelopment/WebDevelopment";
import './App.css'; 




function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/think" element={<ThinkPage />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
          <Route path="/termandcondition" element={<Termsandcondition />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/training/fullstack-development" element={<FullstackDevelopment />} />
          <Route path="/training/meanstack-developement" element={<MeanstackDevelopement />}/> 
          <Route path="/training/qaandautomation" element={<QAandAutomation />} />
          <Route path="/training/devops" element={<Devops />} />
          <Route path="/service/agiletransformation" element={<AgileTransformation/>} />
          <Route path="/service/Itservice" element={<ItService/>} />
          <Route path="/service/webdevelopment" element={<WebDevelopment/>} />
          <Route path="/service/cloudcomputing" element={<CloudComputing/>} />
          <Route path="/service/androidandios" element={<AndroidandIOS/>} />
          <Route path="/service/hosting" element={<Hosting/>} />
          <Route path="/service/WebDesing" element={<WebDesign/>} />
          <Route path="/service/serversupport" element={<ServerSupport/>} />
        </Routes>
      </div> 
      <Footer /> 
    </Router>
  );
}

export default App;
