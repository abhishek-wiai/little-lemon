import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [formData, setFormData] = useState({
    date: undefined,
    time: undefined,
    noOfGuests: 1,
    occasion: "Birthday",
  });

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: "#F4CE14",
          fontFamily: "Markazi",
          backgroundColor: "#495e57",
          padding: "20px",
        }}
      >
        Make a Reservation
      </h1>
      <form
        style={{
          display: "grid",
          maxWidth: "300px",
          gap: "20px",
          backgroundColor: "#EDEFEE",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px",
          borderRadius: "20px",
          marginBottom: "40px",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          data-testid="date-select"
          required
          onChange={(e) => {
            console.log("Date Change");
            setFormData({ ...formData, date: e.currentTarget.value });
            dispatch({ type: "select_date" });
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          data-testid="time-select"
          required
          value={formData.time}
          onChange={(e) => {
            setFormData({ ...formData, time: e.currentTarget.value });
          }}
        >
          <option key={undefined} value={undefined}>
            Select a time
          </option>
          )
          {availableTimes.map((time) => {
            return (
              <option key={time} value={time}>
                {time}
              </option>
            );
          })}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          required
          value={formData.noOfGuests}
          onChange={(e) => {
            setFormData({ ...formData, noOfGuests: e.currentTarget.value });
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.occasion}
          required
          onChange={(e) => {
            setFormData({ ...formData, occasion: e.currentTarget.value });
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        <button
          style={{
            width: "200px",
            height: "auto",
            background: "#F4CE14",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
            marginTop: "20px",
            padding: "10px",
            marginBottom: "20px",
            color: "black",
            fontSize: 16,
            fontFamily: "Karla",
            fontWeight: "700",
            wordWrap: "break-word",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={(e) => {
            e.preventDefault();
            console.log(JSON.stringify(formData));
            if (formData.date === undefined || formData.time === undefined) {
              alert("Please complete the form!");
            } else {
              submitForm(formData);
            }
          }}
        >
          Reserve A Table
        </button>
      </form>
    </>
  );
};

export default BookingForm;
