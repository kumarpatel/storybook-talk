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
  Text,
  CodePane,
  Image,
  Notes,
  Fill,
  Appear,
  Layout,
  Code
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import code from "./code.example";
import storybookLogo from "./storybook-logo.svg";
import slide1Gif from "./slide1.gif";

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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            <Image src={storybookLogo} />
          </Heading>
          <Notes>
            <h4>Question: show of hands</h4>
            <ol>
              <li>How many people have heard of Storybook?</li>
              <li>Familiarity with React?</li>
            </ol>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Goal:
          </Heading>
          <Appear
            order={1}
            startValue={{ opacity: 0.1 }}
            endValue={{ opacity: 1 }}
            transitionDuration={1000}
          >
            <List>
              <ListItem>What is Storybook?</ListItem>
              <ListItem>Why use it?</ListItem>
              <ListItem>How to get started?</ListItem>
              <ListItem>Alternatives?</ListItem>
              <ListItem>How it helped App Team?</ListItem>
              <ListItem>Demo</ListItem>
            </List>
          </Appear>

          <Notes>
            <li>Here are some of things I'll be covering during this talk.</li>
            <ol>
              <li>This talk is not to sell you on Storybook.</li>
              <li>
                It is to sell you on the idea of investing in tooling similar to
                this.
              </li>
            </ol>
          </Notes>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          textColor="primary"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={code}
          ranges={[
            { loc: [0, 1], title: "Importing React" },
            { loc: [2, 30] }, //TodoList Component
            { loc: [4, 12], title: "Contructor Method" },
            { loc: [13, 25], title: "Render Method" },
            { loc: [14, 17] }, //Creating TodoItem by mapping through the list
            { loc: [18, 24] },
            { loc: [26, 29], title: "addEvent Method" },
            { loc: [31, 36], title: "TodoItem Component" },
            { loc: [37, 72] }, //NewTodoItem Component
            { loc: [39, 47] }, //Contructor Method
            { loc: [48, 51] }, //componentDidMount
            { loc: [52, 63] }, //render
            { loc: [64, 69] }, //onChange
            { loc: [70, 75] }, //onSubmit
            { loc: [77, 78], title: "Rendering component in the DOM" }
          ]}
        />
        <CodeSlide
          bgColor="secondary"
          textColor="primary"
          transition={["fade"]}
          lang="js"
          code={code}
          ranges={[
            { loc: [0, 18], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [1, 2], note: "Heres a note!" },
            { loc: [2, 3] },
            { loc: [4, 7] },
            { loc: [8, 10] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Layout>
            <Fill>
              <List>
                <Appear>
                  <ListItem>
                    <Text textColor="primary">
                      M<Code
                        style={{ backgroundColor: "none" }}
                        textSize="1.4em"
                        textColor="green"
                      >
                        V
                      </Code>C
                    </Text>
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>Declarative</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Virtual DOM</ListItem>
                </Appear>
                <Appear>
                  <ListItem>One way data flow</ListItem>
                </Appear>
              </List>
            </Fill>
            <Fill>
              <Appear>
                <Text textColor="#FFF" textSize="1.8em">
                  f(data) = View
                </Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="primary" caps>
            <Image src={storybookLogo} style={{ height: 150, width: 350 }} />
          </Heading>
          <Image src={slide1Gif} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodePane
            lang="jsx"
            source={code}
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
      </Deck>
    );
  }
}
