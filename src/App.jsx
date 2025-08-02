import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "animate.css";
import HeroPage from "./pages/Hero";
import ExplorePage from "./pages/Explore";
import VenusPage from "./pages/Venus";
import MarsPage from "./pages/Mars";
import UranusPage from "./pages/Uranus";
import MercuryPage from "./pages/Mercury";
import JupiterPage from "./pages/Jupiter";
import NeptunePage from "./pages/Neptune";
import PlutoPage from "./pages/Pluto";
import SaturnPage from "./pages/Saturn";
import KupierPage from "./pages/Kupier";
import AsteroidPage from "./pages/Asteroid";
import ReturnPage from "./pages/Return";
import SunPage from "./pages/Sun";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<HeroPage />} />

        <Route path="/venus" element={<VenusPage />} />

        <Route path="/mercury" element={<MercuryPage />} />

        <Route path="/mars" element={<MarsPage />} />

        <Route path="/jupiter" element={<JupiterPage />} />

        <Route path="/saturn" element={<SaturnPage />} />

        <Route path="/uranus" element={<UranusPage />} />

        <Route path="/neptune" element={<NeptunePage />} />

        <Route path="/pluto" element={<PlutoPage />} />

        <Route path="/explore" element={<ExplorePage />} />

        <Route path="/kupier" element={<KupierPage />} />

        <Route path="/asteroid" element={<AsteroidPage />} />

        <Route path="/return" element={<ReturnPage />} />

        <Route path="/sun" element={<SunPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
