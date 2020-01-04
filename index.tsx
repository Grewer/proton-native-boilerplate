import React from "react";
import { App, render, Window } from 'proton-native';
import MyApp from "./app"; // import the proton-native components

class Container extends React.Component {
  render() { // all Components must have a render method
    return (
      <App>
        <Window title="grewer test!" menuBar={false}>
          <MyApp/>
        </Window>
      </App>
    );
  }
}

render(<Container/>); // and finally render your main component
