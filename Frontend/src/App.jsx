import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import HeroSection from "./pages/user/HeroSection";
import CategoriesSection from "./components/landingPage/categorySection/CategoriesSection";
import Items from "./pages/user/Items";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ProtectedRoute from "./routes/productedRoute";
import AuthProvider from "./context/AuthContext";
import OurItems from "./pages/user/OurItems";
import Overview from "./pages/user/Overview";
import Record from "./pages/user/Record";
import WithSidebar from "./components/layout/WithSideBar";
import Profile from "./pages/user/Profile";
import ItemDetails from "./pages/user/ItemDetails";
import ServicesSection from "./components/landingPage/serviceSection/ServiceSection";
import ContactUsSection from "./components/landingPage/contactUsSection/ContactUsSection";
import Footer from "./components/landingPage/footerSection/Footer";

function Home() {
  return (
    <>
      <HeroSection id="heroSection" />
      <CategoriesSection />
      <ServicesSection />
      <ContactUsSection />
      <Footer />
      
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
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemDetails />} />
          <Route path="/our_items" element={<OurItems />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/record" element={<Record />} />
          <Route path="/profile" element={<Profile />} />
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