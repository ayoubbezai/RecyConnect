import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/global/Navbar";
import HeroSection from "./components/landingPage/heroSection/HeroSection";
import CategoriesSection from "./components/landingPage/CategoriesSection/CategoriesSection";
<<<<<<< HEAD
import Items from "./pages/user/Items";

=======
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
>>>>>>> e13fa8d276b1ae242951f749ab307feffd0e784e
function Home() {
  return (
    <>
      <HeroSection id="heroSection" />
      <CategoriesSection id="categoriesSection" />
    </>
  );
}

function AppContent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/items" element={<Items />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
>>>>>>> e13fa8d276b1ae242951f749ab307feffd0e784e
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
