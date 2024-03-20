import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page Test case", () => {
test("Should load contact us component", () => {
    render(<Contact/>);

  //Querying

  const heading =  screen.getByRole("heading");
  
  //Assertions
  
  expect(heading).toBeInTheDocument();

});


test("Should load button inside the contact us component", () => {
    render(<Contact/>);

  const button =  screen.getByRole("button");
  
  //Assertions
  
  expect(button).toBeInTheDocument();

});

test("Should load input name inside the contact us component", () => {
    render(<Contact/>);

  const inputName =  screen.getByPlaceholderText("name");
  
  //Assertions
  
  expect(inputName).toBeInTheDocument();

});


test("Should load  2 input boxes inside the contact us component", () => {
    render(<Contact/>);

  const inputBoxes =  screen.getAllByRole("textbox");
  
  //Assertions
  
  expect(inputBoxes.length).toBe(2);

});
})


