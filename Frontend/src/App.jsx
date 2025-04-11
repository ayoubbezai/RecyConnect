import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HeroSection from "./pages/user/HeroSection";
import CategoriesSection from "./components/landingPage/CategoriesSection";
import Items from "./pages/user/Items";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProtectedRoute from "./routes/productedRoute";
import AuthProvider from "./context/AuthContext";

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
      <AuthProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/items"
            element={
              <ProtectedRoute>
                <Items />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthProvider>
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
