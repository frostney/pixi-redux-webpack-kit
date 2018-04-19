import { Application, Sprite, loader } from 'pixi.js';

import { GAME_WIDTH, GAME_HEIGHT } from './constants';
import { GameScene, MainMenu } from './scenes';
import heroImage from './assets/hero_front.png';
import './main.css';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new Application({
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
loader.add('hero', heroImage).load((loaderObj, resources) => {
  // This creates a texture from a 'hero.png' image
  const hero = new Sprite(resources.hero.texture);

  // Setup the position of the hero
  hero.x = app.renderer.width / 2;
  hero.y = app.renderer.height / 2;

  // Rotate around the center
  hero.anchor.x = 0.5;
  hero.anchor.y = 0.5;

  // Add the hero to the scene we are building
  app.stage.addChild(hero);
  app.stage.addChild(new GameScene());
  app.stage.addChild(new MainMenu());

  // Listen for frame updates
  app.ticker.add((delta) => {
    // each frame we spin the hero around a bit
    hero.rotation += delta * 0.01;
  });
});
