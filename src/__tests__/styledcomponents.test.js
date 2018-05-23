import React from "react";
import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";
import JokeGenerator from "../jokeGenerator";

const Button = styled.button`
  color: red;
`;

test("it works", () => {
  // const tree = renderer.create(<Button />).toJSON();

  const tree = renderer.create(<JokeGenerator />).toJSON;
  tree.find(element => element.type === "button").simulate("click");

  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("background-color", "red");
});
