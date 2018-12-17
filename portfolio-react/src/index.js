import React from "react";
import ReactDOM from "react-dom";
import PortfolioCards from "./PortfolioCards";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import { Form } from "semantic-ui-react";
import { Image, Reveal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const App = () => {
  const title1="Creative Thoughts";
  const title2="Beautiful Design";

  return (
    <div>
      <Navbar img="" />
      <div class="cd-fixed-bg cd-fixed-bg--1" id="home">
        <div class="cd-fixed-bg__content">
          <h2 class="ml3 text-center">{title1}<br></br>{title2}</h2>
        </div>
      </div>
      <div class="cd-scrolling-bg cd-scrolling-bg--color-2" id="about">
        <AboutMe img="" />
      </div>

      <div class="cd-fixed-bg cd-fixed-bg--2">
        <h2>Do you see what I see?</h2>
      </div>

      <div class="cd-scrolling-bg cd-scrolling-bg--color-3" id="portfolio">
        <div class="cd-scrolling-bg__content">
          <div>
            <h3 class="mt-3">Portfolio</h3>
            <hr />
            <div class="row col-12">
            <a class="ui card col-3 mx-3" href="#card-example-link-card" width="150" height="150">
              <div class="header">Word Guess Game</div>
              <a class="meta" href="https://github.com/aime77/Word-Guess-Game">
                GitHUb Link
              </a>

              <Reveal animated="move">
                <Reveal.Content visible>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="small"
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="small"
                  />
                </Reveal.Content>
              </Reveal>
            </a>

            <a class="ui card col-3 mx-3" href="#card-example-link-card">
              <div class="header">Word Guess Game</div>
              <a class="meta" href="https://github.com/aime77/Word-Guess-Game">
                GitHUb Link
              </a>

              <Reveal animated="move">
                <Reveal.Content visible>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="small"
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <div class="embed-responsive embed-responsive-16by9">
                    <video width="320" height="240" controls>
                      <source
                        src="../images.friendFinder.gif"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </Reveal.Content>
              </Reveal>
            </a>

            <a class="ui card col-3 mx-3" href="#card-example-link-card">
              <div class="header">Word Guess Game</div>
              <a class="meta" href="https://github.com/aime77/Word-Guess-Game">
                GitHUb Link
              </a>

              <Reveal animated="move">
                <Reveal.Content visible>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="small"
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <div class="embed-responsive embed-responsive-16by9">
                    <video width="320" height="240" controls>
                      <source
                        src="../images.friendFinder.gif"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </Reveal.Content>
              </Reveal>
            </a>

            <a class="ui card col-3 mx-3" href="#card-example-link-card">
              <div class="header">Word Guess Game</div>
              <a class="meta" href="https://github.com/aime77/Word-Guess-Game">
                GitHUb Link
              </a>

              <Reveal animated="move">
                <Reveal.Content visible>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="small"
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <div class="embed-responsive embed-responsive-16by9">
                    <video width="320" height="240" controls>
                      <source
                        src="../images.friendFinder.gif"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </Reveal.Content>
              </Reveal>
            </a>

            <a class="ui card col-3 mx-3" href="#card-example-link-card">
              <div class="header">Word Guess Game</div>
              <a class="meta" href="https://github.com/aime77/Word-Guess-Game">
                GitHUb Link
              </a>

              <Reveal animated="move">
                <Reveal.Content visible>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="small"
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <div class="embed-responsive embed-responsive-16by9">
                    <video width="320" height="240" controls>
                      <source
                        src="../images.friendFinder.gif"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </Reveal.Content>
              </Reveal>
            </a>

            <a class="ui card col-3 mx-3" href="#card-example-link-card">
              <div class="header">Word Guess Game</div>
              <a class="meta" href="https://github.com/aime77/Word-Guess-Game">
                GitHUb Link
              </a>

              <Reveal animated="move">
                <Reveal.Content visible>
                  <Image
                    src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                    size="small"
                  />
                </Reveal.Content>
                <Reveal.Content hidden>
                  <div class="embed-responsive embed-responsive-16by9">
                    <video width="320" height="240" controls>
                      <source
                        src="../images.friendFinder.gif"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </Reveal.Content>
              </Reveal>
            </a>

           
            </div>
          </div>
        </div>
      </div>
      <div class="cd-fixed-bg cd-fixed-bg--3" />
      <div class="cd-scrolling-bg cd-scrolling-bg--color-1" id="contact">
        <div class="cd-scrolling-bg__content">
          <div class="my-3 col-lg-6 col-md-12 col-sm-12 col-sx-12 border rounded b-6 border-info mx-2">
            <Form>
              <h3 class="mt-3">Contact Me</h3>
              <hr />
              <Form.Group widths="equal">
                <Form.Input fluid label="First name" style={{color:"white"}} placeholder="First name" />
                <Form.Input fluid label="Last name" placeholder="Last name" />
              </Form.Group>
              <Form.Input
                fluid
                label="Email"
                placeholder="Email"
                name="email"
              />

              <Form.TextArea
                label="Message"
                placeholder="Leave me a message. I'm quick to respond!"
              />
              <Form.Button>Submit</Form.Button>
            </Form>
          </div>
        </div>
      </div>

      <div class="ui inverted green vertical footer segment">
        <div class="ui center aligned container">
            <h4 class="ui inverted header">&copy; Copyright 2019 | All rights reserved | Aime</h4>
            <a href="https://www.facebook.com/"><i class="facebook square icon big"></i></a>
            <a href="https://twitter.com/"><i class="twitter square icon big"></i></a>
            <a href="https://www.linkedin.com/"><i class="linkedin square icon big"></i></a>
        </div>
    </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
