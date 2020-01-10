import React from 'react'; // import from react
import { Box, Button, Dialog, Text } from 'proton-native'; // import the proton-native components


class MyApp extends React.PureComponent {
  clickHandle = () => {
    Dialog('Message', { title: 'this is a message' })
  }

  render() { // all Components must have a render method
    return (
      <Box padded>
        <Text >hello </Text>
        <Button row={1} onClick={this.clickHandle}>click me</Button>
      </Box>
    );
  }
}

export default MyApp
