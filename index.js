import React, { Component } from 'react'; // import from react

import {render, Window, App, Text, Button, Box} from 'proton-native';
import MyApp from "./app"; // import the proton-native components

class Example extends Component {
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

render(<Example />); // and finally render your main component
