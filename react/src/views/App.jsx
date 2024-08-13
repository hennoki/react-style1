// import AOS from "aos";
import FirstSection from "../components/FirstSection/FirstSection";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Navbar/Nav";
import AOS from "aos";
import React from "react";
import "aos/dist/aos.css";
import SecSection from "../components/SecSection/SecSection";
import Banner from "../components/Banner/Banner";
import Sub from "../components/Sub/Sub";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";

function App() {
    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    React.useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 dark:text-white duration-200">
            <Nav handleOrderPopup={handleOrderPopup} />
            <Hero handleOrderPopup={handleOrderPopup} />
            <FirstSection />
            <SecSection handleOrderPopup={handleOrderPopup} />
            <Banner />
            <Sub />
            <FirstSection />
            <Testimonials />
            <Footer />
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
    );
}

export default App;
