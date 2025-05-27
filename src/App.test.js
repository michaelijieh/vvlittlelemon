import { render, screen } from "@testing-library/react";
import App from './App'

test('Main component is present', () => {
    render(<App />);
    const componentElement = screen.getByText("MainSection");
    expect(componentElement).toBeInTheDocument();
})

