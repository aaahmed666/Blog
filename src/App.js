import React, { useState } from "react";
import "./components/FontawesomeIcon";
import TopHeader from "./components/Header/TopHeader";
import MainLogo from "./components/MainLogo/MainLogo";
import Navbar from "./components/NavBar/NavBar";
import MainSlide from "./components/MainSlide/MainSlide";
import AboutDr from "./components/AboutDr/AboutDr";
import AboutClinic from "./components/AboutClinic/AboutClinic";
import ClinicServices from "./components/ClinicServices/ClinicServices";
import BodyMass from "./components/BodyMass/BodyMass";
import Reserve from "./components/Reserve/Reserve";
import Testimonials from "./components/Testimonials/Testimonials";
import Questions from "./components/Q&A/Questions";
import News from "./components/News/News";
import Map from "./components/Map/Map";
import Footer from "./components/Footer/Footer";
import LowerFooter from "./components/LowerFooter/LowerFooter";
import BodyFit from "./components/BodyFit/BodyFit";

function App(props) {
  const addBookingHandler = async (booking) => {
    const response = await fetch(
      "https://react-http-610ce-default-rtdb.firebaseio.com/booking.json",
      {
        method: "POST",
        body: JSON.stringify(booking),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
  };

  const [expenses, setExpenses] = useState("");

  const onAddExpenseHandler = (expense) => {
    setExpenses(expense);
  };

  return (
    <React.Fragment>
      <BodyFit item={expenses} />
      <TopHeader />
      <MainLogo />
      <Navbar />
      <main>
        <MainSlide />
        <section>
          <AboutDr />
        </section>
        <AboutClinic />
        <ClinicServices />
        <BodyMass onBodyIndex={onAddExpenseHandler} />
        <Reserve onAddBooking={addBookingHandler} />
        <Testimonials />
        <Questions />
        <News />
        <Map />
      </main>
      <Footer />
      <LowerFooter />
    </React.Fragment>
  );
}

export default App;
