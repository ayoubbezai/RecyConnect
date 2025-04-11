import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/global/Navbar";
import HeroSection from "./components/landingPage/heroSection/HeroSection";
import CategoriesSection from "./components/landingPage/CategoriesSection/CategoriesSection";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
