abstract class Game {
  abstract start();
  //   abstract functions do not have function body
  abstract stop();
  abstract left();
  abstract right();
}

// richies game must have start() stop() left() right()
class RichieGame extends Game {
  start() {
    console.log("Press up arrow to start");
  }
  stop() {
    console.log("Press down arrow to stop");
  }
  left() {
    console.log("Press left arrow to go left");
  }
  right() {
    console.log("Press right arrow to go right");
  }
}

let g1: Game = new RichieGame();
g1.start();
g1.stop();
g1.left();
g1.right();