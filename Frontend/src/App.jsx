import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import HeroSection from "./pages/user/HeroSection";
import CategoriesSection from "./components/landingPage/CategoriesSection";
import Items from "./pages/user/Items";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProtectedRoute from "./routes/productedRoute";
import AuthProvider from "./context/AuthContext";
import OurItems from "./pages/user/OurItems";
import Overview from "./pages/user/Overview";
import Record from "./pages/user/Record";
import WithSidebar from "./components/layout/WithSideBar";

function Home() {
  return (
    <>
      <HeroSection id="heroSection" />
      <CategoriesSection id="categoriesSection" />
    </>
  );
}

// Layout wrapper for protected routes with sidebar
const ProtectedLayout = () => {
  return (
    <ProtectedRoute>
      <WithSidebar>
        <Outlet />
      </WithSidebar>
    </ProtectedRoute>
  );
};

function AppContent() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes with Sidebar */}
        <Route element={<ProtectedLayout />}>
          <Route path="/items" element={<Items/>} />
          <Route path="/our_items" element={<OurItems />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/record" element={<Record />} />
        </Route>
      </Routes>
    </AuthProvider>
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