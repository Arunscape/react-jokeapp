import { render } from "react-testing-library";
import "dom-testing-library/extend-expect";
import React from "react";
import Joke from "../joke";

test("Joke component recieves props and then renders text", () => {
  const { getByTestId } = render(<Joke text="The funniest joke" />);

  expect(getByTestId("joke-text")).toHaveTextContent("The funniest joke");
});
