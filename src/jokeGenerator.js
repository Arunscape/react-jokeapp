import React, { Component } from "react";
import axios from "axios";
import Joke from "./joke";
const RANDOM_JOKE_URL = "https://api.icndb.com/jokes/random";

export default class JokeGenerator extends Component {
  state = {
    joke: null,
    loading: false,
    colour: ""
  };

  loadJoke = async () => {
    this.setState({ loading: true, colour: "red" });

    const { data: { value: { joke } } } = await axios.get(RANDOM_JOKE_URL);
    this.setState({ loading: false, joke, colour: "" });
    // this.setState({ loading: false, joke });
  };

  render() {
    const { joke, loading } = this.state;
    const style = {
      backgroundColor: this.state.colour
    };
    return (
      <React.Fragment>
        {!joke && !loading && <div>You haven't loaded any joke yet!</div>}
        {loading && <div>Loading...</div>}
        {joke && !loading && <Joke text={joke} />}

        <button onClick={this.loadJoke} type="button" style={style}>
          Load a random joke
        </button>
      </React.Fragment>
    );
  }
}
