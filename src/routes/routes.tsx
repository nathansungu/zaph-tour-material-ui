import Contacts from "../pages/contact";
import TripTypes from "../pages/trip-types";
import Destination from "../pages/destinations";
import Home from "../pages/home";

import { Route, Routes} from "react-router-dom";

export default function PagesRoutes() {
  return (
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="trips" element={<TripTypes />} />
      <Route path="destinations" element={<Destination />} />
    </Routes>
  );
}
