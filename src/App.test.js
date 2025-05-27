import { render, screen } from "@testing-library/react";
import App from './App'
import BookingForm from "./assets/component/BookingForm";

test('Mainsection component is present', () => {
    render(<App />);
    const componentElement = screen.getByText("MainSection");
    expect(componentElement).toBeInTheDocument();
})




test("Book now button is functional", () => {
  render(<BookingForm />); 
  
  const heading = screen.getByTestId("currentNumber"); 
  
  const bookNow = screen.getByTestId("Book Now"); 
  
  fireEvent.click(bookNow); 
  
  expect(heading).toHaveTextContent("Your booking has been reserved");
});

