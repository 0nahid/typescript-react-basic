import React, { Component } from "react";

interface Props {}
interface State {}

export default class Feature extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div>
        <h1>This is a feature</h1>
      </div>
    );
  }
}
