import imgPostureCheck from "./projectImages/postureCheck.png";
import imgThreatAlert from "./projectImages/threatAlert.png";
import imgGoogleBookSearch from "./projectImages/googleBookSearch.png";
import imgClickyGame from "./projectImages/clickyGame.png";
import imgMediumScraper from "./projectImages/mediumScraper.png";
import imgPOSBurger from "./projectImages/getBurger.png";
import imgDevourBurger from "./projectImages/devourBurger.png";
import imgFriendFinder from "./projectImages/friendFinder.png";
import imgGIFSearch from "./projectImages/gifSearch.png";
import imgTriviaGame from "./projectImages/triviaImage.png";
import imgRPG_Game from "./projectImages/RPG.png";
import liriApp from "./projectImages/liriApp.png";
import wordConstructor from "./projectImages/wordConstructor.png";
import bamazon from "./projectImages/bamazon.png";
import hrSite from "./projectImages/hrSite.png";
import painTracker from "./projectImages/painTracker.png";

export default [
  {
    name: "Posture Check",
    description:
      "A sophisticated posture game which tracks body points while the user performs YouTube video stretches.",
    github: "https://github.com/aime77/postureCheck",
    link: "https://posture-check.herokuapp.com/",
    image: imgPostureCheck,
    technologies:
      "TensorFlow, React, Redux, D3, Mongoose, Node, Express, YouTube API, Google OAuth",
    category: "fullstack"
  },
  {
    name: "Threat Alert -Team of 4",
    description:
      "A system with an employee clock-in face recognition feature which assesses emotional attributes, and alerts manager if statistical scores of anger and sadness are too low.",
    github: "https://github.com/nyramirez/Threat-Alert-P1",
    image: imgThreatAlert,
    technologies:
      "Tracking, Firebase, Face++ API, BlockUI Plugin, JQuery, Bootstrap ",
    link: "https://nyramirez.github.io/Threat-Alert-P1/",
    category: "frontend"
  },
  {
    name: "Google Search Book",
    description: "App to search, view and save Google books.",
    github: "https://github.com/aime77/google-books-search",
    image: imgGoogleBookSearch,
    technologies: "React, Google Books API, Express, Node",
    link: "https://search-google-books-and-save.herokuapp.com/",
    category: "fullstack"
  },
  {
    name: "Clicky Game",
    description:
      "Memory game app which allows user to select theme of pictures.",
    github: "https://github.com/aime77/clickyGame",
    image: imgClickyGame,
    technologies: "React, Usplash API, Sementic UI",
    link: "https://aime77.github.io/clickyGame/",
    category: "fullstack"
  },
  {
    name: "Medium Scraper",
    description:
      "App to save, view and take notes of your favorite Medium technology related articles.",
    github: "https://github.com/aime77/clickyGame",
    image: imgMediumScraper,
    technologies: "Axios, Handlebars, Express, Node",
    link: "https://medium-scraper-and-note-taker.herokuapp.com/",
    category: "fullstack"
  },
  {
    name: "POS Burger System",
    description:
      "POS system to take and cash orders, and review customers' history.",
    github: "https://github.com/aime77/sequalizedBurger",
    image: imgPOSBurger,
    technologies: "MySQL, Sequalize, Handlebars, Express, Node ",
    link: "https://yum-yum-burger-pos.herokuapp.com/",
    category: "fullstack"
  },
  {
    name: "Devour a Burger",
    description:
      "Fun app to enter burger of choice and see the list of the ones user devours.",
    github: "https://github.com/aime77/burger",
    image: imgDevourBurger,
    technologies: "MySQL, Handlebars, Express, Node",
    link: "https://burger-yum-yum.herokuapp.com/",
    category: "fullstack"
  },
  {
    name: "Friend Finder",
    description: "Upon survey completion, app matches user to a friend.",
    github: "https://github.com/aime77/FriendFinder",
    image: imgFriendFinder,
    technologies: "MySQL, JQuery Modals,JawsDB, Express, Node",
    link: "https://find-friends-4-ever.herokuapp.com/",
    category: "fullstack"
  },

  {
    name: "GIF Search",
    description: "Health related GIF searcher.",
    github: "https://github.com/aime77/GifTastic",
    image: imgGIFSearch,
    technologies: "GIF API, JavaScript, CSS, HTML",
    link: "https://aime77.github.io/GifTastic/",
    category: "frontend"
  },
  {
    name: "Trivia Game",
    description: "Game to test your knowledge about the brain.",
    github: "https://github.com/aime77/TriviaGame",
    image: imgTriviaGame,
    technologies: "CSS, JavaScript, JQuery, Bootstrap",
    link: "https://aime77.github.io/TriviaGame/",
    category: "frontend"
  },
  {
    name: "Superhero RPG Game",
    description: "Dynamic game to battle against heroes.",
    github: "https://github.com/aime77/RPG-Game",
    image: imgRPG_Game,
    technologies: "JavaScript, CSS, HTML, JQuery, Bootsrap",
    link: "https://aime77.github.io/RPG-Game/",
    category: "other"
  },
  {
    name: "Quantum Word Guessing Game",
    description:
      "Word guessing qame app which uses constructors for Letters and Words.",
    github: "https://github.com/aime77/ConstructorWordGuess",
    image: wordConstructor,
    technologies: "JavaScript, CSS, HTML, JQuery, Bootsrap",
    link: "https://youtu.be/UxQwhz6k-Lg",
    category: "backend"
  },
  {
    name: "Bamazon!",
    description:
      "Amazon-like storefront app. App takes in orders from customers and deplete stock from the store's inventory.",
    github: "https://github.com/aime77/Node.js-MySQL",
    image: bamazon,
    technologies: "MySQL, Inquirer, cli-table, Node, Express",
    link: "https://youtu.be/1GF3IYAbe60",
    category: "backend"
  },
  {
    name: "Media Searcher",
    description:
      "This app uses Spotify, Bands in Town and OBD APIs to get media information for the user",
    github: "https://github.com/aime77/liri-node-app",
    image: liriApp,
    technologies: "API Spotify, API Bands in Town, API OBD, Node, Express",
    link: "https://youtu.be/69rdWog0zKc",
    category: "backend"
  },
  {
    name: "Pain-Mood Tracker -Solo Creator",
    description:
      "App to be used in a research study to track pain and mood of participants and give statistical updates to investigators.",
    image: painTracker,
    technologies: "React, Redux, D3, Mongoose",
    category: "upcoming"
  },
  {
    name: "HR System -Team of 5",
    description: "Site to oversee activity of coorporation members.",
    image: hrSite,
    technologies: "Drupal",
    category: "upcoming"
  }
];
