var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight = 300;
var score = 0;
var count = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("black");
  textSize(40)
  text("Score : " + score, 297, 448);
  fill("white");
  textSize(30)
  text(1000, 5, 550);
  text(900, 98, 550);
  text(800, 178, 550);
  text(700, 255, 550);
  text(500, 335, 550);
  text(500, 415, 550);
  text(700, 495, 550);
  text(800, 575, 550);
  text(900, 655, 550);
  text(1000, 725, 550);
  Engine.update(engine);
  ground.display();



  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  if (particle != null) {
    particle.display();

    if (particle.body.position.y > 760) {
      if (particle.body.position.x < 85 &&
      particle.body.position.x > 0) {
        score = score + 1000;
        particle = null;
        if (count >= 5) gameState = "end";
      } else if (
        particle.body.position.x < 168 &&
        particle.body.position.x > 85
      ) {
        score = score + 900;
        particle = null;
        if (count >= 5) gameState = "end";
      } else if (
        particle.body.position.x < 244 &&
        particle.body.position.x >  168
      ) {
        score = score + 800;
        particle = null;

        if (count === 5) gameState = "end";
      } else if (
        particle.body.position.x < 325 &&
        particle.body.position.x > 244
      ) {
        score = score + 700
        particle = null;

        if (count === 5) gameState = "end"
      }else if (
        particle.body.position.x < 406 &&
        particle.body.position.x > 325
      ) {
        score = score + 500
        particle = null;

        if (count === 5) gameState = "end"
      } else if (
        particle.body.position.x < 486 &&
        particle.body.position.x > 406
      ) {
        score = score + 500
        particle = null;

        if (count === 5) gameState = "end"
      } else if (
        particle.body.position.x < 565 &&
        particle.body.position.x > 486
      ) {
        score = score + 700
        particle = null;

        if (count === 5) gameState = "end"
      } else if (
        particle.body.position.x < 645 &&
        particle.body.position.x > 565
      ) {
        score = score + 800
        particle = null;

        if (count === 5) gameState = "end"
      } else if (
        particle.body.position.x < 725 &&
        particle.body.position.x > 645
      ) {
        score = score + 900
        particle = null;

        if (count === 5) gameState = "end"
      }else if (
        particle.body.position.x < 805 &&
        particle.body.position.x > 725
      ) {
        score = score + 1000
        particle = null;

        if (count === 5) gameState = "end"
      }

    }
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

function mousePressed() {
  if (gameState !== "end") {
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}
