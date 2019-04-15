import React, { Component } from 'react';
import frameAnimation from 'bb-frame-animation'
// import logo from './logo.svg';
import img1 from './assets/us/1.png'
import img2 from './assets/us/2.png'
import img3 from './assets/us/3.png'
import img4 from './assets/us/4.png'
import img5 from './assets/us/5.png'
import img6 from './assets/us/6.png'
import img7 from './assets/us/7.png'
import img8 from './assets/us/8.png'
import img9 from './assets/us/9.png'
import img10 from './assets/us/10.png'
import img11 from './assets/us/11.png'
import img12 from './assets/us/12.png'
import img13 from './assets/us/13.png'
import img14 from './assets/us/14.png'
import img15 from './assets/us/15.png'
import img16 from './assets/us/16.png'
import img17 from './assets/us/17.png'
import img18 from './assets/us/18.png'
import img19 from './assets/us/19.png'
import img20 from './assets/us/20.png'
import img21 from './assets/us/21.png'
import img22 from './assets/us/22.png'
import img23 from './assets/us/23.png'
import img24 from './assets/us/24.png'
import img25 from './assets/us/25.png'
import img26 from './assets/us/26.png'
import img27 from './assets/us/27.png'
import img28 from './assets/us/28.png'
import img29 from './assets/us/29.png'
import img30 from './assets/us/30.png'
import img31 from './assets/us/31.png'
import img32 from './assets/us/32.png'
import img33 from './assets/us/33.png'
import img34 from './assets/us/34.png'
import './App.css';

function $(id) {
  return document.getElementById(id);
}

var starImages = []
Array(34).fill(0).forEach((item, index) => {
  var img = require(`./assets/us/${index + 1}.png`)
    starImages.push(img)
})

console.log('starImages', starImages)
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: false
    }
  }
  componentDidMount() {
    console.log('frameAnimation', frameAnimation)
    this.uskidStar()
  }

  uskidStar = () => {
    var frameLength = 33;
    var frame = 1;

    this.starAn = frameAnimation().loadImage(starImages, function() {
        console.log('图片加载成功')
    }).enterFrame(function(success, time) {
        // console.log('time', frame, images)

        $('star').style.backgroundImage = `url(${starImages[frame].img})`
        frame++;
        if (frame > frameLength) {
            frame = 0;
            success();
            return;
        }
    }).repeatForever()

    this.starAn.start(120)
  }

  stop = () => {
    if (this.state.status) {
      // this.starAn.dispose()
      this.starAn.pause()
    } else {
      this.starAn.restart()
    }
    this.setState({ status: !this.state.status })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="star" onClick={this.stop}></div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
