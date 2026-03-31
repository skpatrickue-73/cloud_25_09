import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import UserList from "./pages/UserList";
import UserProfile from "./pages/UserProfile";
import NavBar from "./components/NavBar";





export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Seite Home */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />

        {/* Seite Userseiten */}
        <Route path="/users"> 
            <Route index element={<UserList />}/>
            <Route path="names" element={<UserList />} />
            <Route path=":userId" element={<UserProfile />} />
        </Route>


        {/* Seite 404 */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
