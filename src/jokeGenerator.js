import React, { Component } from "react";

export default class JokeGenerator extends Component {
  state = { joke: null };

  render() {
    const { joke } = this.state;
    return (
      <React.Fragment>
        (!joke && <div>You haven't loaded a joke yet!</div>)
      </React.Fragment>
    );
  }
}
