import { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";

class Index extends Component{

  public render(): JSX.Element{
    return(
      <div>Hello !!</div>
    );
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Index />, app);
