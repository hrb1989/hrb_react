// 1. Appearance - Rendering
// 2. Data flow - Passing the props/args
// 3. Functional - if the button is clicked

import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"


// test('should first', () => { second })

// 1. Appearance - Rendering
test('Render Button', () => { 
    render(<Button>Click here</Button>); // render in the UI

    const buttonElement = screen.getByText(/Click here/i); // To capture or read from screen - like virtual screen
    expect (buttonElement).toBeInTheDocument(); // Check the value in the actual dom
 });

// 2. Data flow - Passing the props/args
// 3. Functional - if the button is clicked

test('test Clicking', () => { 
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click here</Button>); // render in the UI with the onClick
    const buttonElement = screen.getByText(/Click here/i); // To capture or read from screen - like virtual screen
    fireEvent.click(buttonElement); //Simulate clicking
    expect(handleClick).toHaveBeenCalledTimes(1);
 });