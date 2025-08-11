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
import ReturnPage from "./pages/Return";
import VenusPage from "./pages/planets/Venus";
import MarsPage from "./pages/planets/Mars";
import UranusPage from "./pages/planets/Uranus";
import MercuryPage from "./pages/planets/Mercury";
import JupiterPage from "./pages/planets/Jupiter";
import NeptunePage from "./pages/planets/Neptune";
import PlutoPage from "./pages/planets/Pluto";
import SaturnPage from "./pages/planets/Saturn";
import KupierPage from "./pages/other_celestials/Kupier";
import AsteroidPage from "./pages/other_celestials/Asteroid";
import SunPage from "./pages/other_celestials/Sun";
import Render from "./pages/Render";
import News from "./pages/blog/News";
import Blog from "./pages/blog/Blog";

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

        <Route path="/render" element={<Render />} />

        <Route path="/news" element={<News />} />

        <Route path="/blogs/:blogId" element={<Blog />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
