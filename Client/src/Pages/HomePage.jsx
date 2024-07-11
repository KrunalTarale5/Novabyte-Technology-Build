import React from "react";
import Cards from "../components/Cards/Cards";
import TechnologyOverview from "../components/TechnologyOverview/TechnologyOverview";
import HomePageCard from "../components/HomePageCard/HomePageCard";
import InventoryVisibility from "../components/InventoryVisibility/InventoryVisibility";
import InsideNovaByte from "../components/InsideNovaByte/InsideNovaByte";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import Footer from "../components/Footer/Footer";
import AISolutionsComponent from "../components/AISolutionsComponent/AISolutionsComponent";
import Trailer from '../components/Trailer/Trailer';

const HomePage = () => {
  return (
    <div>
    <Trailer header = "Transforming Ideas <br/> with Cutting-Edge <br/> Technology and Research" content = "Delivering Tailored Web Solutions and Advanced AI Products to Drive Your Success" url = "/public/image-1.jpeg"/>
      <Cards />
      <TechnologyOverview />
      <HomePageCard />
      <InventoryVisibility />
      <InsideNovaByte />
      <ContactInfo />
    </div>
  );
};

export default HomePage;
