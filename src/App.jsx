import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import SpotDetail from "./pages/SpotDetail";
import NewSpot from "./pages/NewSpot";
import MapPage from "./pages/MapPage";
import MeetupsPage from "./pages/MeetupsPage";
import ProfilePage from "./pages/ProfilePage";
import { initialSpots } from "./data/spots";

export default function App() {
  const [spots, setSpots] = useState(initialSpots);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home spots={spots} />}
      />

      <Route
        path="/map"
        element={<MapPage spots={spots} />}
      />

      <Route
        path="/meetups"
        element={<MeetupsPage />}
      />

      <Route
        path="/profile"
        element={<ProfilePage />}
      />

      <Route
        path="/spot/:id"
        element={<SpotDetail spots={spots} />}
      />

      <Route
        path="/new-spot"
        element={
          <NewSpot
            spots={spots}
            setSpots={setSpots}
          />
        }
      />
    </Routes>
  );
}