import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Helpbar from "./components/Helpbar";

//pages
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
import Faq from "./pages/help/Faq";
import ReachOut from "./pages/help/ReachOut";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="stuff" element={<Stuff />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="help" element={<Helpbar />}>
        <Route path="faq" element={<Faq />} />
        <Route path="reachout" element={<ReachOut />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
