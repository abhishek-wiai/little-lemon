import { useReducer } from "react";
import BookingForm from "./BookingForm";
import "./Reserve.css";
import { useNavigate } from "react-router-dom";
const Reserve = ({ setReservationFormData }) => {
  const navigate = useNavigate();
  const initialTimes = [
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  const submitForm = (formData) => {
    console.log(formData);
    setReservationFormData(formData);
    navigate("/confirm-reservation");
  };

  function initializeTimes() {
    return initialTimes;
  }

  function spliceArrayRandomly(arr) {
    // Ensure array is not empty
    if (arr.length === 0) {
      console.error("Array is empty.");
      return [];
    }
    // Generate random starting position
    const startingPosition = Math.floor(Math.random() * arr.length);
    // Generate random length for the splice
    const maxLength = arr.length - startingPosition;
    const randomLength = Math.floor(Math.random() * (maxLength + 1));
    // Splice the array
    const splicedArray = arr.slice();
    splicedArray.splice(startingPosition, randomLength);
    return splicedArray;
  }

  const updateTimes = (availableTimes, action) => {
    if (action.type === "select_date") {
      console.log("Update Times");
      const newAvailableTimes = spliceArrayRandomly(initialTimes);
      console.log(newAvailableTimes);
      return newAvailableTimes;
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
};

export default Reserve;
