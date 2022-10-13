var edges;
var player, fly, fall, stand;
var livel, liveG;
var points = 0;
var gameState = "START";
var baseImg, baseGroup;
var badImg, badThingsGroup;
var backgroundImage, serveS;
var escenario = "ciudad";
var musicaSound,
  bck,
  musicaFondo = "ciudad";
var on = "on";
let timer = 120;
var reactorArc, reactorImg, tiempoImg, tiemposG;
var x, realidad, realSound, realImg, reals;
var bck1bck2, bck3, bck4, bck5, bck1S, bck2S, bck3S, bck4S, bck5S;
var probabilidad,
  lives = 2;
var reactorSound, rckS, invincible;
var playerImg, loseS, loseImg, loseM;
var base, bases, baseI, basImg, enemy1G, enemy2G, enemy3G, enemy4G, enemy5G;
var enemy1Img, enemy2Img, enemy3Img, enemy4Img, enemy5Img;
var enemy1, enemy2, enemy3, enemy4, enemy5;
var arcs,
  tiempoG,
  timeSound,
  alma,
  almaImg,
  almaSound,
  almas,
  playS = "false";
var poder,
  poderImg,
  poders,
  poderS,
  invT = 0;
var mente, menteImg, mentes, menteS, mP;

//Función para cargar imágenes y animaciones
function preload() {
  backgroundImage = loadImage("background.jpg");
  bck1 = loadImage("images/bck1.jpg");
  bck2 = loadImage("images/bck2.jpg");
  bck3 = loadImage("images/bck3.jpg");
  bck4 = loadImage("images/bck4.jpg");
  bck5 = loadImage("images/bck5.jpg");

  loseImg = loadImage("images/loseImg.png");

  enemy1Img = loadImage("images/enemy1.png");
  enemy2Img = loadImage("images/enemy2.png");
  enemy3Img = loadImage("images/enemy3.png");
  enemy4Img = loadImage("images/enemy4.png");
  enemy5Img = loadImage("images/enemy5.png");

  baseImg = loadImage("images/baseImg.png");
  reactorImg = loadImage("arc.png");
  playerImg = loadImage("images/stand.png");
  poderImg = loadImage("images/poder.png");
  menteImg = loadImage("images/mente.png");

  reactorSound = loadSound("reactorS.mp3");
  timeSound = loadSound("images/timeSound.mp3");

  loseS = loadSound("images/loses.mp3");
  explo = loadSound("images/explosion.mp3");

  bck1S = loadSound("images/bck1S.mp3");
  bck2S = loadSound("images/bck2S.mp3");
  bck3S = loadSound("images/bck3S.mp3");
  bck4S = loadSound("images/bck4S.mp3");
  bck5S = loadSound("images/bck5S.mp3");
  musicaSound = loadSound("musicaCiudad.mp3");
  serveS = loadSound("images/serve.mp3");
  rckS = loadSound("images/rckS.mp3");
  almaSound = loadSound("images/soulS.mp3");
  realSound = loadSound("images/realityS.mp3");
  poderS = loadSound("images/poderS.mp3");
  menteS = loadSound("images/mindS.mp3");

  fly = loadAnimation("images/fly1.png", "images/fly2.png");
  loseA = loadAnimation(
    "images/loseA_1.png",
    "images/loseA_2.png",
    "images/loseA_3.png",
    "images/loseA_4.png",
    "images/loseA_5.png",
    "images/loseA_6.png"
  );

  invincible = loadAnimation(
    "images/invincible_1.png",
    "images/invincible_2.png"
  );
  caminarIzquierda = loadAnimation(
    "images/walkL_1.png",
    "images/walkL_2.png",
    "images/walkL_3.png",
    "images/walkL_4.png"
  );
  stand = loadAnimation("images/stand.png");
}
//Función para declarar Sprites y grupos
function setup() {
  createCanvas(450, 800);
  reactorArc = createSprite(-20, -25, 20, 20);
  liveL = createSprite(1000, 30, 100, 25);
  tiempoG = createSprite(20, -25, 20, 20);
  realidad = createSprite(30, -30, 20, 20);
  player = createSprite(225, 450, 20, 20);

  enemy1 = createSprite(-20, -25, 20, 20);
  enemy2 = createSprite(-20, -25, 20, 20);
  enemy3 = createSprite(-20, -25, 20, 20);
  enemy4 = createSprite(-20, -25, 20, 20);
  enemy5 = createSprite(-20, -25, 20, 20);

  loseM = createSprite(-20, -25, 20, 20);
  poder = createSprite(-20, -25, 20, 20);
  mente = createSprite(-20, -25, 20, 20);

  base = createSprite(-50, -3, 70, 20);
  edges = createEdgeSprites();

  liveG = loadImage("images/liveL.png");
  realImg = loadImage("images/realidad.png");
  almaImg = loadImage("images/alma.png");
  tiempoImg = loadImage("images/tiempo.png");

  reactorArc.addImage(reactorImg);
  tiempoG.addImage(tiempoImg);
  liveL.addImage(liveG);
  loseM.addImage(loseImg);
  poder.addImage(poderImg);

  enemy1.addImage(enemy1Img);
  enemy2.addImage(enemy2Img);
  enemy3.addImage(enemy3Img);
  enemy4.addImage(enemy4Img);
  enemy5.addImage(enemy5Img);

  enemy1.scale = 0.01;
  enemy2.scale = 0.01;
  enemy3.scale = 0.01;
  enemy4.scale = 0.01;
  enemy5.scale = 0.01;

  reactorArc.scale = 0.025;

  player.addAnimation("flying", fly);
  //player.addAnimation("falling",fall)
  player.addAnimation("walkingl", caminarIzquierda);
  player.addAnimation("standing", stand);
  player.addAnimation("lose", loseA);
  player.addAnimation("inv", invincible);
  frameRate(30);

  arcs = new Group();
  tiemposG = new Group();
  bases = new Group();
  baseI = new Group();
  reals = new Group();
  almas = new Group();
  misiles = new Group();
  poders = new Group();
  mentes = new Group();

  enemy1G = new Group();
  enemy2G = new Group();
  enemy3G = new Group();
  enemy4G = new Group();
  enemy5G = new Group();

  //reactorArc.addGroup()
}
//Función para dibujar los Sprites y establecer reglas del juego
function draw() {
  background(220);
  mapa();

  //poderes();

  //Puntuación

  //Inicio del juego
  if (gameState === "VIDAPERDIDA") {
    liveL.position.x = 190;
    liveL.position.y = 155;
    liveL.scale = 0.8;
    player.y = 340;
    player.x = 225;
    player.velocityY = 0;
    if (keyDown(32)) {
      gameState = "PLAY";
      liveL.position.y = 1000;
    }
  }
  if (gameState === "START") {
    if (playS == "false") {
      serveS.play();
      playS = "true";
    }
    player.x = 225;
    player.y = 340;

    if (keyDown(32)) {
      gameState = "PLAY";
      serveS.stop();
    }
    fill("#FF1200");
    textSize(23);

    text("Presiona espacio para jugar el papu juego", 5, 420);
  }

  if (gameState === "PLAY") {
    //vidas
    // misil.changeAnimation('rocket',misilA)

    if (player.isTouching(edges[3])) {
      lives--;
      lifeOver();
    }

    //Fondo infinito

    //gravedad
    player.velocityY = player.velocityY + 0.8;

    //Mover personaje con las felchas
    if (keyDown("right_arrow")) {
      player.x = player.x + 5;
    }
    if (keyDown("left_arrow")) {
      player.x = player.x - 5;
    }

    if (keyDown("up_arrow")) {
      player.velocityY = -4;
      if (invT == 0) {
        player.changeAnimation("flying");
      }
    } else if (invT == 0) {
      if (player.collide(baseI, bases)) {
        player.changeAnimation("standing");
      }
    }

    //crear bases y hacer que el personaje quede sobre ellas

    createBases();

    tiempo();

    player.collide(edges);

    player.collide(bases);
    //tiempo,vidas,puntos
    if (lives == 5) {
      lives--;
    }
    textSize(15);
    fill("#09E4F7");
    text(points + " Puntos", 50, 110, width / 5, height / 5);

    fill("#09E4F7");
    text(lives + " Vidas", 50, 130, width / 5, height / 5);
    musica();
    //enemigos
    if (invT < 1) {
      if (player.isTouching(enemy1G, removeEnemy1)) {
        explo.play();
        lives = lives - 1;
        points = points - Math.floor(random(5, 7));
        lifeOver();
      }
      if (player.isTouching(enemy2G, removeEnemy2)) {
        explo.play();
        lives = lives - 1;
        points = points - Math.floor(random(6, 8));
        lifeOver();
      }
      if (player.isTouching(enemy3G, removeEnemy3)) {
        explo.play();
        lives = lives - 1;
        points = points - Math.floor(random(7, 9));
        lifeOver();
      }
      if (player.isTouching(enemy4G, removeEnemy4)) {
        explo.play();
        lives = lives - 1;
        points = points - Math.floor(random(9, 13));
        lifeOver();
      }
      if (player.isTouching(enemy5G, removeEnemy5)) {
        explo.play();
        lives = lives - 1;
        points = points - Math.floor(random(12, 15));
        lifeOver();
      }
    }

    //Aumentar puntos
    if (player.isTouching(poders, removePower)) {
      invT = 14;
      poderS.stop();
      poderS.play();
      points = points + Math.floor(random(10, 15));
      player.changeAnimation("inv");
    }

    if (player.isTouching(almas, removeSouls)) {
      almaSound.play();
      lives = lives + 1;
      timer = timer + Math.floor(random(3, 7));
      points = points + Math.floor(random(2, 5));
    }

    if (player.isTouching(mentes, removeMind)) {
      mP = random(1, 40);
      if (mP < 6) {
        tiempoG = createSprite(
          player.position.x,
          player.position.y - 25,
          20,
          20
        );
        tiempoG.addImage(tiempoImg);
        tiempoG.scale = 0.5;
        tiemposG.add(tiempoG);
        tiempoG.velocityY = 2;
      }

      if (mP > 5 && mP < 11) {
        realidad = createSprite(
          player.position.x,
          player.position.y - 25,
          20,
          20
        );

        realidad.addImage(realImg);
        realidad.scale = 0.5;
        reals.add(realidad);
        realidad.velocityY = 2;
      }

      if (mP > 10 && mP < 16) {
        alma = createSprite(player.position.x, player.position.y - 25, 20, 20);

        alma.addImage(almaImg);
        alma.scale = 0.5;
        almas.add(alma);
        alma.velocityY = 2;
      }

      if (mP > 15 && mP < 21) {
        poder = createSprite(player.position.x, player.position.y - 25, 20, 20);

        poder.addImage(poderImg);
        poder.scale = 0.5;
        poders.add(poder);
        poder.velocityY = 2;
      }
      if (mP > 20 && mP < 25) {
        if (lives > 1) {
          lives--;
          menteS.play();
          almaSound.play();
        }

        if (mP > 24 && mP < 29) {
          timer = timer - Math.floor(random(10, 27));
          menteS.play();
          tiempoSound.play();
        }
        if (mP > 28 && mP < 36) {
          points = points - Math.floor(random(10, 25));
          menteS.play();
          reactorSound.play();
        }
        if (mP > 35) {
          menteS.play();
        }
      }
    }

    if (player.isTouching(arcs, removeArcs)) {
      reactorSound.play();
      timer = timer + Math.floor(random(5, 7));
      points = points + Math.floor(random(2, 5));
    }
    if (player.isTouching(tiemposG, removeTimeG)) {
      timeSound.play();
      timer = timer + Math.floor(random(15, 30));
      points = points + 5;
    }
    if (player.isTouching(reals, removeReality)) {
      realSound.play();
      escenario = Math.floor(random(1, 5));
      points = points + Math.floor(random(5, 10));
      if (escenario == 1) {
        musicaSound.stop();
        bck1S.stop();
        bck2S.stop();
        bck3S.stop();
        bck4S.stop();
        bck5S.stop();
        bck1S.setVolume = 0.5;

        bck1S.play();
      }
      if (escenario == 2) {
        musicaSound.stop();
        bck1S.stop();
        bck2S.stop();
        bck3S.stop();
        bck4S.stop();
        bck5S.stop();
        bck2S.setVolume(0.5);
        bck2S.play();
      }
      if (escenario == 3) {
        musicaSound.stop();
        bck1S.stop();
        bck2S.stop();
        bck3S.stop();
        bck4S.stop();
        bck5S.stop();
        bck3S.setVolume(0.5);
        bck3S.play();
      }
      if (escenario == 4) {
        musicaSound.stop();
        bck1S.stop();
        bck2S.stop();
        bck3S.stop();
        bck4S.stop();
        bck5S.stop();
        bck4S.setVolume(0.5);
        bck4S.play();
      }
      if (escenario == 5) {
        musicaSound.stop();
        bck1S.stop();
        bck2S.stop();
        bck3S.stop();
        bck4S.stop();
        bck5S.stop();
        bck5S.setVolume(0.5);
        bck5S.play();
      }
    }

    //crear Cosas Malas

    //Cambiar a estao GAMEOVER
  }

  //Estado GAMEOVER

  if (gameState === "GAMEOVER") {
    player.x = 225;
    player.y = 340;
    player.velocityY = 0;
    frameRate(7.5);
    loseA.looping = false;
    player.scale = 1.7;

    loseS.setVolume(0.5);
    loseM.position.x = 190;
    loseM.position.y = 155;
    loseM.scale = 0.8;
  }

  drawSprites();
}

//Función para crear bases
function createBases() {
  if (frameCount % 100 === 0) {
    x = random(50, 450);
    var baseS = createSprite(x, 0, 70, 20);
    base = createSprite(x, -3, 80, 9);
    base.addImage(baseImg);
    base.scale = 0.5;
    baseS.visible = false;
    baseS.velocityY = 2;
    base.velocityY = 2;
    bases.add(base);
    baseI.add(baseS);

    crearPowerUps();
  }
}

//Función para crear Cosas Malas

function createBadThings() {
  var velo = 3;
  if (frameCount % 75 === 0) {
  }
}

//Función para eliminar CosasBuenas
function removeArcs(sprite, arcs) {
  arcs.remove();
}
function removeTimeG(sprite, timeG) {
  timeG.remove();
}
function removeReality(sprite, reals) {
  reals.remove();
}
function removeSouls(sprite, almas) {
  almas.remove();
}
function removeEnemy1(sprite, enemy1G) {
  enemy1G.remove();
}
function removeEnemy2(sprite, enemy2G) {
  enemy2G.remove();
}
function removeEnemy3(sprite, enemy3G) {
  enemy3G.remove();
}
function removeEnemy4(sprite, enemy4G) {
  enemy4G.remove();
}
function removeEnemy5(sprite, enemy5G) {
  enemy5G.remove();
}
function removePower(sprite, poders) {
  poders.remove();
}
function removeMind(sprite, mentes) {
  mentes.remove();
}

function musica() {
  if (on == "on") {
    musicaSound.setVolume(0.125);
    musicaSound.play();
  }
  on = "off";
}

function tiempo() {
  textSize(15);
  fill("#09E4F7");
  text(timer + ":segundos restantes", 50, 70, width / 5, height / 5);

  if (frameCount % 60 == 0 && timer > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer = timer - 1;
  }
  if (timer === 0) {
    gameState = "GAMEOVER";
    loseS.play();
    player.changeAnimation("lose");
    bck1S.stop();
    bck2S.stop();
    bck3S.stop();
    bck4S.stop();
    bck5S.stop();
  }
  if (lives == 0) {
    gameState = "GAMEOVER";
    loseS.play();
    player.changeAnimation("lose");
    musicaSound.stop();
    bck1S.stop();
    bck2S.stop();
    bck3S.stop();
    bck4S.stop();
    bck5S.stop();
  }
  /*textSize(15)
  fill("#09E4F7")
  text(invT + ":segundos de invinvibilidad restantes",50,190, width/5, height/5);  */
  if (frameCount % 60 == 0 && invT > 0) {
    // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    invT--;
  }
}
function mapa() {
  if (escenario == "ciudad") {
    background(backgroundImage);
  }
  if (escenario == 1) {
    background(bck1);
  }
  if (escenario == 2) {
    background(bck2);
  }
  if (escenario == 3) {
    background(bck3);
  }
  if (escenario == 4) {
    background(bck4);
  }
  if (escenario == 5) {
    background(bck5);
  }
}

function crearPowerUps() {
  probabilidad = Math.floor(random(1, 600));

  if (probabilidad > 1) {
    if (probabilidad < 251) {
      enemy1 = createSprite(random(20, 420), -25, 20, 20);
      enemy1.addImage(enemy1Img);
      enemy1.scale = 0.12;
      enemy1G.add(enemy1);
      enemy1.velocityY = 3;
      explo.setVolume(0.5);
    }
  }
  if (probabilidad > 250) {
    if (probabilidad < 311) {
      enemy2 = createSprite(random(20, 420), -25, 20, 20);
      enemy2.addImage(enemy2Img);
      enemy2.scale = 0.12;
      enemy2G.add(enemy2);
      enemy2.velocityY = 1.75;
      explo.setVolume(0.5);
    }
  }

  if (probabilidad > 250) {
    if (probabilidad < 361) {
      enemy3 = createSprite(random(20, 420), -25, 20, 20);
      enemy3.addImage(enemy3Img);
      enemy3.scale = 0.12;
      enemy3G.add(enemy3);
      enemy3.velocityY = 3;
      explo.setVolume(0.5);
    }
  }

  if (probabilidad > 360) {
    if (probabilidad < 455) {
      enemy4 = createSprite(random(20, 420), -25, 20, 20);
      enemy4.addImage(enemy4Img);
      enemy4.scale = 0.12;
      enemy4G.add(enemy4);
      enemy4.velocityY = 2;
      explo.setVolume(0.5);
    }
  }

  if (probabilidad > 455) {
    if (probabilidad < 551) {
      enemy5 = createSprite(random(20, 420), -25, 20, 20);
      enemy5.addImage(enemy5Img);
      enemy5.scale = 0.12;
      enemy5G.add(enemy5);
      enemy5.velocityY = 2.5;
      explo.setVolume(0.5);
    }
  }

  if (probabilidad > 175) {
    if (probabilidad < 186) {
      mente = createSprite(x, -25, 20, 20);
      mente.addImage(menteImg);
      mente.scale = 0.5;
      mentes.add(mente);
      mente.velocityY = 2;
      menteS.setVolume(0.5);
    }
  }

  if (probabilidad > 157) {
    if (probabilidad < 176) {
      poder = createSprite(x, -25, 20, 20);
      poder.addImage(poderImg);
      poder.scale = 0.5;
      poders.add(poder);
      poder.velocityY = 2;
      poderS.setVolume(0.5);
    }
  }

  if (probabilidad > 142) {
    if (probabilidad < 158) {
      alma = createSprite(x, -25, 20, 20);
      alma.addImage(almaImg);
      alma.scale = 0.5;
      almas.add(alma);
      alma.velocityY = 2;
      almaSound.setVolume(0.5);
    }
  }

  if (probabilidad > 120) {
    if (probabilidad < 143) {
      realidad = createSprite(x, -25, 20, 20);
      realidad.addImage(realImg);
      realidad.scale = 0.5;
      reals.add(realidad);
      realidad.velocityY = 2;
      realSound.setVolume(0.5);
    }
  }

  if (probabilidad > 70) {
    if (probabilidad < 121) {
      tiempoG = createSprite(x, -25, 20, 20);
      tiempoG.addImage(tiempoImg);
      tiempoG.scale = 0.5;
      tiemposG.add(tiempoG);
      tiempoG.velocityY = 2;
      timeSound.setVolume(0.5);
    }
  }
  if (probabilidad < 71) {
    reactorArc = createSprite(x, -25, 20, 20);
    arcs.add(reactorArc);
    reactorArc.addImage(reactorImg);
    reactorArc.scale = 0.025;
    reactorArc.velocityY = 2;
    reactorSound.setVolume(0.5);
  }
}
function lifeOver() {
  if (lives > 0) {
    gameState = "VIDAPERDIDA";
  }
}
