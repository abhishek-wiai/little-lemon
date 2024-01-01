const BookingConfirmed = (props) => {
  return (
    <h1
      style={{
        textAlign: "center",
        color: "#F4CE14",
        fontFamily: "Markazi",
        backgroundColor: "#495e57",
        padding: "20px",
      }}
    >
      Reservation Confirmed for {props.formData.noOfGuests} guests.
    </h1>
  );
};

export default BookingConfirmed;
