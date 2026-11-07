# Simon Game

A browser version of the classic Simon memory game, built with HTML, CSS and JavaScript. The game plays a growing sequence of colors and sounds, and you have to repeat it back in the same order. Every round adds one more step, so it gets harder as you go.

**[▶ Play the live demo](https://jivasnider.github.io/Simon-Game/)**

## How to play

1. Start the game (see the instruction shown on the page).
2. Watch and listen to the sequence of colored buttons.
3. Repeat the sequence by clicking the buttons in the same order.
4. If you get it right, the sequence grows by one step. If you get it wrong, the game ends and you can start over.

## Built with

- HTML5
- CSS3
- JavaScript

## Project structure

```
Simon-Game/
├── index.html      # Page structure
├── styles.css      # Styling and animations
├── game.js         # Game logic
└── sounds/         # Audio for each button and the game-over sound
```

## Run locally

No build step or dependencies are needed.

```bash
git clone https://github.com/jivasnider/Simon-Game.git
cd Simon-Game
```

Then open `index.html` in your browser.

## What I learned

- Handling user events and DOM manipulation with JavaScript
- Managing game state and sequences
- Playing audio and adding simple animations
- Publishing a static site with GitHub Pages

## Credits

Started from the Simon Game challenge in a web development course.
