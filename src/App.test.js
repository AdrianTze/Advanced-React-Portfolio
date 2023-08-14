import { fireEvent, queryByText, render, screen } from "@testing-library/react";
import App from "./App";
import ContactMeSection from "./components/ContactMeSection";
import { faN } from "@fortawesome/free-solid-svg-icons";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// describe("Contact Me Form", () => {
//   test("First Name Error Message is shown if the input is empty after it is touched at least once", () => {
//     render(<App />);

//     const fInput = screen.getByLabelText("Name");
//     fireEvent.focus(fInput);
//     fireEvent.blur(fInput);

//     const formControl = fInput.nextElementSibling;

//     expect(fInput).toBeInTheDocument();
//     expect(formControl).not.toBeNull();
//   });
// });qq
