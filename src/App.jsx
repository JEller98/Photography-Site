import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PersonalWork from "./pages/PersonalWork";
import PersonalWorkProject from "./pages/PersonalWorkProject";
import ExhibitsCategory from "./pages/ExhibitsCategory";
import ExhibitIndividual from "./pages/ExhibitIndividual";
import About from "./pages/About";

// import EditorialWork from "./pages/EditorialWork";
// import EditorialWorkItem from "./pages/EditorialWorkItem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<HomePage />} />
          <Route path = "/work" element = {<PersonalWork />} />
          <Route path = "/work/:slug" element = {<PersonalWorkProject />} />
          <Route path = "/exhibits"  element = {<ExhibitsCategory />} />
          <Route path = "/exhibits/:slug" element = {<ExhibitIndividual />} />
          <Route path = "/about" element = {<About />} />
          
          {/* Editorial work hidden for the foreseeable future */}
          {/* <Route path = "editorial" element = {<EditorialWork />} />
          <Route path = "editorial/:slug" element = {<EditorialWorkItem />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};