
<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://i.imgur.com/FbcVPiK.png" alt="ReactMusicPlayer">
  </a>
</p>

React Music Player is a simple, responsive music player with a nice and clean UI that features my favorite soundtracks from video games(BFG FTW).
React Music Player is not a full blown player (Not yet) but it holds the basic functionality for every player out there: Play/Pause, Draggable progression bar, Time tracking, Shuffle, Repeat, Mute and a Playlist.

The idea of creating this player was inspired by a design that i have stumbled upon and i wanted to recreate it using react, I saw it as a wonderful opportunity to expand my knowledge about WebAudio API, UI animations, Transferring data using Firebase as a database, Sending requests using Axios and recreating designs into functional programs.

The app is built around a modified version of ReactH5AudioPlayer which does most of the heavy lifting when it comes to playing and tracking the time, I thought about creating the player from scratch but eventually i wanted to be efficient and reuse any ready component i can use.
The song files and the data is transferred through the Firebase API using Axios for the requests, It is not the ideal way to transfer such files but the focus of the project was Front-End, A server will be added later.


### Built With
This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [ReactJS](https://reactjs.org/)
* [ReactTransitionGroup](https://github.com/reactjs/react-transition-group)
* [ReactH5AudioPlayer](https://www.npmjs.com/package/react-h5-audio-player)
* [Firebase](https://firebase.google.com/)
* [Axios](https://github.com/axios/axios)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

In order to run metronote locally, you must clone the repository to your machine, you can do this by running the following command in your CLI
```sh
$ git clone https://github.com/RonnyNovik/React-Music-Player.git
```

### Installation and running the project locally

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.




<!-- USAGE EXAMPLES -->
## Usage

Using the player is just like any other player you are accustomed to, all the controls are designed to be intuitive and user friendly.
<p align="center">
  <a href="">
    <img src="https://i.imgur.com/FbcVPiK.png" alt="ReactMusicPlayer">
  </a>
</p>
Here is the list of currently available songs, Click on one of them to play!
<p align="center">
  <a href="">
    <img src="https://i.imgur.com/zgM3mO9.png" alt="ReactMusicPlayer">
  </a>
</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.






<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [MDN Web Docs](https://developer.mozilla.org)
* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
