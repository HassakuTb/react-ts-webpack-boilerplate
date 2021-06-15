import { Component } from "react";
import React from "react";
import ReactDOM from "react-dom";
import {Button} from "react-bulma-components";
import "./styles/style.sass";

class Index extends Component{

  public render(): JSX.Element{
    return(
      <div>
        <Button color="primary">Bulma</Button>
      </div>
    );
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Index />, app);
