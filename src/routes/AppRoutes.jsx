import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Hotel from "../pages/HotelPage";
import CruiseDetails from "../pages/CruiseDetails";
import FlightListingPage from "../pages/FlightListingPage";
import CruiseIndexPage from "../pages/CruiseIndexPage";
import ContactUsPage from "../pages/ContactUsPage";
import FlightDetailsPage from "../pages/FlightDetailsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<Hotel />} />
      <Route path="/cruises" element={<CruiseIndexPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/cruise/details" element={<CruiseDetails />} />
      <Route path="/flight/listing" element={<FlightListingPage />} />
      <Route path="/flight/details" element={<FlightDetailsPage />} />
    </Routes>
  );
}
