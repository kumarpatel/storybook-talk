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
  Code,
  ComponentPlayground
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import code from "./assets/code.example";
import buttonComponent from "./assets/button-component.example";
import buttonStory from "./assets/button-storybook.example";
import buttonStoryDemoGif from "./assets/button-storybook-demo.gif";
import storybookInstallation from "./assets/storybook-installation.example";
import storybookLogo from "./assets/storybook-logo.svg";
import slide1Gif from "./assets/slide1.gif";
import styleGuidist from "./assets/style-guidist.gif";

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
            <ul>
              <li>How many people have heard of Storybook?</li>
              <li>Familiarity with React?</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Goal:
          </Heading>
          <Appear
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
            <ul>
              <li>This talk is not to sell you on Storybook</li>
              <li>It is to show you how easy it is to integrate Storybook.</li>
              <li>
                ...and hopefully help you make an informed decision over it's
                alternatives
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="primary">
            What is Storybook?
          </Heading>
          <Image src={slide1Gif} />

          <Notes>
            <li>Interactive styleguide</li>
            <li>What is a styleguide?!?!</li>
            <li>It's a way to easily understand your apps building blocks</li>
            <li>
              For example: A HeaderComponent, FooterComponent, CardComponents,
              Button, etc
            </li>
            <li>
              In this example, you see a Button component being represented in
              different scenarios
            </li>
            <li>One with text</li>
            <li>The other with emojis</li>
          </Notes>
        </Slide>

        <CodeSlide
          bgColor="secondary"
          textColor="primary"
          transition={["fade"]}
          lang="js"
          textSize=".6em"
          code={storybookInstallation}
          ranges={[
            { loc: [0, 5], title: "Storybook integration" },
            {
              loc: [0, 1],
              title: "Global install CLI tool",
              notes: "Installed Storybook CLI tool"
            },
            {
              loc: [2, 3],
              title: "Execute from your project dir",
              notes:
                "This will add all required depencencies & files to integrate Storybook into your project"
            }
          ]}
        />

        <CodeSlide
          bgColor="secondary"
          textColor="primary"
          transition={["fade"]}
          lang="jsx"
          textSize=".6em"
          code={buttonStory}
          ranges={[
            {
              loc: [8, 25],
              title: "Our first Story",
              notes: "This example is written in gatsby-wordpress project"
            },
            {
              loc: [2, 5],
              title: "Storybook imports",
              notes: ""
            },
            {
              loc: [0, 1],
              title: "¯\\_(ツ)_/¯",
              notes: "Gotta import react"
            },
            {
              loc: [8, 9],
              title: "Give your story a name",
              notes: ""
            },
            {
              loc: [9, 10],
              title: "First story",
              notes: ""
            },
            {
              loc: [11, 14],
              title: "Themed button",
              notes: ""
            },
            {
              loc: [15, 24],
              title: "with lenghty text & href link",
              notes: ""
            },
            {
              loc: [8, 25],
              image: buttonStoryDemoGif,
              notes: ""
            }
          ]}
        />

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Why use Storybook?
          </Heading>
          <Appear
            startValue={{ opacity: 0.1 }}
            endValue={{ opacity: 1 }}
            transitionDuration={1000}
          >
            <List>
              <ListItem>Develop components in isolation</ListItem>
              <ListItem>Improved Designer-Developer collaboration</ListItem>
              <ListItem>Onboarding new team members</ListItem>
              <ListItem>Addon: Storyshots</ListItem>
            </List>
          </Appear>

          <Notes>
            <li>Why use Storybook?</li>
            <ul>
              <li>Developing components in isolation</li>
              <li>Or a set of components that form a meaningful peice of functionality. Example: signup form or pagination component</li>
              <li>Storyshots autogenerates jest snapshot test for your stories. One less thing to do.</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="primary">
            What is Storybook?
          </Heading>
          <Image src={slide1Gif} />

          <Notes>
            <li>Interactive styleguide</li>
            <li>What is a styleguide?!?!</li>
            <li>It's a way to easily understand your apps building blocks</li>
            <li>
              For example: A HeaderComponent, FooterComponent, CardComponents,
              Button, etc
            </li>
            <li>
              In this example, you see a Button component being represented in
              different scenarios
            </li>
            <li>One with text</li>
            <li>The other with emojis</li>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={6} textColor="primary">
            Very similar to React Styleguidist
          </Heading>
          <Image src={styleGuidist} />

          <Notes>
            <li>Interactive styleguide</li>
            <li>What is a styleguide?!?!</li>
            <li>It's a way to easily understand your apps building blocks</li>
            <li>
              For example: A HeaderComponent, FooterComponent, CardComponents,
              Button, etc
            </li>
            <li>
              In this example, you see a Button component being represented in
              different scenarios
            </li>
            <li>One with text</li>
            <li>The other with emojis</li>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Layout>
            <Fill>
              <Appear>
                <ComponentPlayground
                  theme="external"
                  previewBackgroundColor="#343434"
                  code={buttonComponent}
                />
              </Appear>
            </Fill>
          </Layout>
        </Slide>

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
