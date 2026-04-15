import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import PersonalWork from "./pages/PersonalWork";
import PersonalWorkProject from "./pages/PersonalWorkProject";
import EditorialWork from "./pages/EditorialWork";
import EditorialWorkItem from "./pages/EditorialWorkItem";
import About from "./pages/About";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<PersonalWork />} />
          <Route path = "/:slug" element = {<PersonalWorkProject />} />
          {/* Editorial work hidden for the foreseeable future */}
          {/* <Route path = "editorial" element = {<EditorialWork />} />
          <Route path = "editorial/:slug" element = {<EditorialWorkItem />} /> */}
          <Route path = "about" element = {<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};