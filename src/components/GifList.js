import React, { Component } from "react";
import GifListContainer from "../containers/GifListContainer";

export default class GifList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.forEach(element => {
            <li>{element}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export { GifList };
