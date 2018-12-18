import React from "react";
import { Form } from "semantic-ui-react";
import { Image, Reveal } from "semantic-ui-react";

const PortfolioCards = props => {
  return (
    <div className="row col-12">
      <a
        className="ui card col-3 mx-3"
        href="#card-example-link-card"
        width="150px"
      >
        <div className="header">Friend Finder</div>
        <a
          className="githubLink"
          href="https://github.com/aime77/Word-Guess-Game"
        >
          GitHUb Link
        </a>

        <Reveal animated="move">
          <Reveal.Content visible>
            <Image src="../images/friendFinder.png" size="medium" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              className="hiddenGif"
              src="../images/friendFinder.gif"
              size="medium"
            />
          </Reveal.Content>
        </Reveal>
      </a>

      <a className="ui card col-3 mx-3" href="#card-example-link-card">
        <div className="header">Get a Burger!</div>
        <a className="meta" href="https://github.com/aime77/Word-Guess-Game">
          <div className="githubLink"> GitHUb Link</div>
        </a>

        <Reveal animated="move">
          <Reveal.Content visible>
            <Image src="../images/getBurger.png" size="medium" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src="../images/burger.gif" size="medium" />
          </Reveal.Content>
        </Reveal>
      </a>

      <a className="ui card col-3 mx-3" href="#card-example-link-card">
        <div className="header">Word Guess Game</div>
        <a
          className="githubLink"
          href="https://github.com/aime77/Word-Guess-Game"
        >
          GitHUb Link
        </a>

        <Reveal animated="move">
          <Reveal.Content visible>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              size="medium"
            />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/chris.jpg"
              size="medium"
            />
          </Reveal.Content>
        </Reveal>
      </a>

      <a className="ui card col-3 mx-3" href="#card-example-link-card">
        <div className="header">Threat Alert</div>
        <a
          className="githubLink"
          href="https://github.com/aime77/Word-Guess-Game"
        >
          GitHUb Link
        </a>

        <Reveal animated="move right">
          <Reveal.Content visible>
            <Image src="../images/project1.png" size="medium" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src="../images/threatAlert.gif" size="medium" />
          </Reveal.Content>
        </Reveal>
      </a>

      <a className="ui card col-3 mx-3" href="#card-example-link-card">
        <div className="header">Trivia Game</div>
        <a
          className="githubLink"
          href="https://github.com/aime77/Word-Guess-Game"
        >
          GitHUb Link
        </a>

        <Reveal animated="move right">
          <Reveal.Content visible>
            <Image src="../images/triviaImage.png" size="medium" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src="../images/triviaGame.gif" size="medium" />
          </Reveal.Content>
        </Reveal>
      </a>

      <a className="ui card col-3 mx-3" href="#card-example-link-card">
        <div className="header">Word Guess Game</div>
        <a
          className="githubLink"
          href="https://github.com/aime77/Word-Guess-Game"
        >
          GitHUb Link
        </a>

        <Reveal animated="move right">
          <Reveal.Content visible>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              size="medium"
            />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
              size="medium"
            />
          </Reveal.Content>
        </Reveal>
      </a>
    </div>
  );
};
export default PortfolioCards;
