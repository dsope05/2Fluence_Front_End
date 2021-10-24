import React, { useState } from 'react';
import './App.css';
import tikTokImage from'./tikTokLogo.png';
import trendingImage from'./trendingImage.png';


const Platforms = () => {
  return (
    <div className="Platforms">
      <div className="Platform">
        <div>
          TikTok
        </div>
        <div className="platform-image">
          <img src={tikTokImage} width="20px" height="20px" />
        </div>
      </div>
      <div className="Platform">
        Instagram
        <div className="platform-image">
          <img src={tikTokImage} width="20px" height="20px" />
        </div>
      </div>
      <div className="Platform">
        Facebook
        <div className="platform-image">
          <img src={tikTokImage} width="20px" height="20px" />
        </div>
      </div>
      <div className="Platform">
        Youtube
        <div className="platform-image">
          <img src={tikTokImage} width="20px" height="20px" />
        </div>
      </div>
    </div>
  )
}

const Trending = () => {
  const [trendingDirection, trendingDirectionChange] = useState('right');
  const images = [
    <img src={trendingImage} className="trending-image"/>,
    <img src={trendingImage} className="trending-image"/>,
    <img src={trendingImage} className="trending-image"/>,
    <img src={trendingImage} className="trending-image"/>,
  ];
  return (
    <div>
      <div className="trending-title-wrapper">
        <div className="trending-title">
          Trending
        </div>
        <div className="trending-buttons">
          <div
            className={`trending-left ${trendingDirection === 'left' ? 'trending-purple': ''}`}
            onClick={() => trendingDirectionChange('left')}
          >
           <i class="fas fa-angle-left fa-2x"></i>
          </div>
          <div
            className={`trending-right ${trendingDirection === 'right' ? 'trending-purple': ''}`}
            onClick={() => trendingDirectionChange('right')}
          >
           <i class="fas fa-angle-right fa-2x"></i>
          </div>
        </div>
      </div>
      <div className="trending-images-wrapper">
        { images }
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="platforms-title">
          Platforms
        </div>
        <Platforms />
        <Trending />
        <div className="next-big-thing-title">
          Next Big Thing
        </div>
      </header>
    </div>
  );
}

export default App;
