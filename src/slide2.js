// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  CodePane,
  Markdown,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Slide2 extends React.Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <CodePane
            lang="jsx"
            source={require('raw-loader!./code.example')} // eslint-disable-line import/no-webpack-loader-syntax
            margin="20px auto"
            overflow = "overflow"
          />
      </Slide>
    );
  }
}
