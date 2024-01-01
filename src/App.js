import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Reserve from "./components/Reserve/Reserve";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import BookingConfirmed from "./components/Reserve/BookingConfirmed";
function App() {
  const [reservationFormData, setReservationFormData] = useState({});

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route
          path="reserve"
          element={<Reserve setReservationFormData={setReservationFormData} />}
        />
        <Route
          path="confirm-reservation"
          element={<BookingConfirmed formData={reservationFormData} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
