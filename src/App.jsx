import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Login from "./pages/Signin";
import Register from "./pages/Register";
import OrdersPage from "./pages/Orders.jsx";
import GoogleApiWrapper from "./pages/Contact";
import About from "./pages/About.jsx";
import Header from "./components/header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Feedback from "./pages/Feedback.jsx";
import Products from "./pages/Products.jsx";
import Client_register from "./client/pages/Client_registre.jsx";
import Clientdashboard from "./client/pages/Client_dashboard.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Blog from "./pages/blog.jsx";
import Profile from "./components/profile.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBlog from "./pages/AddBlog.jsx";

const App = () => {
    const location = useLocation();

    // Function to determine if header should be shown based on route
    const showHeader = () => {
        // Check if location pathname is not '/signin' or '/register'
        return (
            location.pathname !== "/signin" &&
            location.pathname !== "/register" &&
            location.pathname !== "/cdashboard" &&
            location.pathname !== "/clientregister"
        );
    };

    // Function to determine if footer should be shown based on route
    const showFooter = () => {
        return location.pathname !== "/cdashboard";
    };

    return (
        <>
            {showHeader() && <Header />}

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/products" element={<Products />} />
                <Route path="/clientregister" element={<Client_register />} />
                <Route path="/cart" element={<GoogleApiWrapper />} />
                <Route exact path="*" element={<Notfound />} />
                <Route exact path="/cdashboard" element={<Clientdashboard />} />
                <Route exact path="/contact" element={<ContactUs />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/add-blog" element={<AddBlog />} />
                <Route exact path="/profile" element={<Profile />} />
            </Routes>

            {showFooter() && <Footer />}
        </>
    );
};

export default App;
