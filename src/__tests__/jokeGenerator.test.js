import { render, Simulate } from "react-testing-library";
import "dom-testing-library/extend-expect";
import React from "react";
import Joke from "../joke";
import JokeGenerator from "../jokeGenerator";
//first test
test("Joke component recieves props and then renders text", () => {
  const { getByTestId } = render(<Joke text="The funniest joke" />);
  expect(getByTestId("joke-text")).toHaveTextContent("The funniest joke");
});

test("JokeGenerator component fetches a random joke and renders it", () => {
  const { getByText } = render(<JokeGenerator />);
  expect(getByText("You haven't loaded any joke yet!")).toBeInTheDOM();
});
