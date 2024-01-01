import { render, screen } from "@testing-library/react";
import Reserve from "./components/Reserve/Reserve";
import { MemoryRouter as Router } from "react-router-dom";

test("renders booking form", () => {
  render(
    <Router>
      <Reserve />
    </Router>
  );
  const linkElement = screen.getByText(/Make a Reservation/i);
  expect(linkElement).toBeInTheDocument();
});

test("initializeTimes works", () => {
  render(
    <Router>
      <Reserve />
    </Router>
  );
  // Assuming your select element has a data-testid attribute
  const selectElement = screen.getByTestId("time-select");

  // Check if the select element exists
  expect(selectElement).toBeInTheDocument();

  // Get the options within the select element
  const options = Array.from(selectElement.querySelectorAll("option"));

  // Check if there is at least one option
  expect(options.length).toBeGreaterThan(0);
});
