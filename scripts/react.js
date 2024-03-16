document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  // Prevent form submission
  playButton.addEventListener("click", function (event) {
    event.preventDefault();
    startGame();
  });
  const urlParams = new URLSearchParams(window.location.search);

  const nama = urlParams.get("finalNama");
  if (nama) {
    document.getElementById("nama").value = urlParams.get("finalNama");
    document.getElementById("level").value = urlParams.get("finalLevel");
    document.getElementById("country").value = urlParams.get("country");
    document.getElementById("country_opponent").value = urlParams.get("countryOpponent");
    cekform()
    playButton.click()
  }

});

//  - Melakukan varidasi sebelum masuk game - 
function cekform() {
    if (
      document.querySelector("#nama").value != "" &&
      document.querySelector("#country").value != "" &&
      document.querySelector("#country_opponent").value != "" &&
      document.querySelector("#level").value != ""
    ) {
      document.querySelector("#playButton button").disabled = false;
    } else {
      document.querySelector("#playButton button").disabled = true;
    }
  }
  function restart() {
    const finalNama = document.getElementById("nama").innerText;
    const finalLevel = document.getElementById("finalLevel").innerText;
    const country = document.getElementById("country").innerText;
    const countryOpponent = document.getElementById("countryOpponent").innerText;
  
    window.location.href = `index.html?finalNama=${finalNama}&finalLevel=${finalLevel}&country=${country}&countryOpponent=${countryOpponent}`;
  }

  function startGame() {
  let timeValue = document.getElementById("level").value;

  if (timeValue === "Easy") {
    timerDuration = 30;
  } else if (timeValue === "Medium") {
    timerDuration = 20;
  } else if (timeValue === "Hard") {
    timerDuration = 15;
  }
  // Move the following code block here
  function updateTimer() {
    if (elapsedTime < timerDuration) {
      elapsedTime += 0.01;
    } else if (scorePlayer1 != scorePlayer2) {
      clearInterval(timerInterval);
      gameOver();
    } else {
      timerDuration;
    }
  }
  
  timerInterval = setInterval(() => {
    updateTimer();
  }, 10);
  
  function gameOver() {
    // Calculate the final score
    const finalNama = document.getElementById("nama").value;
    const finalLevel = document.getElementById("level").value;
    const finalScore = scorePlayer1 + " - " + scorePlayer2;

    // Get the player name, country, and opponent country
    const countryValue = document.getElementById("country").value;
    const countryOpponentValue =
      document.getElementById("country_opponent").value;

    // Get the flag filenames
    const countryFileName =
      countryValue + ".png";
    const countryOpponentFileName =
      countryOpponentValue + ".png";

    // Redirect to a new page with the final score, player name, country, and opponent country
    window.location.href = `game_over.html?finalNama=${finalNama}&finalLevel=${finalLevel}&finalScore=${finalScore}&country=${countryValue}&countryOpponent=${countryOpponentValue}&Flag=${countryFileName}&opponentFlag=${countryOpponentFileName}`;
  }
                                  //Bagian PauseGame
  addEventListener("keydown", function (e) {
    if (e.code == "Escape") {
      if (isPaused) resumeGame();
      else pauseGame();
    }
  });

  function showPopup(text, callback) {
    // Create the popup element
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.classList.add("paused-popup");
    popup.innerHTML = `<p>${text}</p>`;
    
  
    // Add the popup to the body
    document.body.appendChild(popup);
  
    // Add a click event listener to the popup to resume the game
    popup.addEventListener("click", function () {
      hidePopup();
      callback();
    });
  }
  function pauseGame() {
    pausedElapsedTime = elapsedTime; // Store the current elapsed time
    clearInterval(timerInterval);
    isPaused = true;
    canvas.style.opacity = 0.5;
    showPopup("Game Is Paused, press ESC to Resume");
  }

  function resumeGame() {
    isPaused = false;
    update();
    const popup = document.querySelector(".popup.paused-popup");
    if (popup) {
      document.body.removeChild(popup);
    }
    canvas.style.opacity = 1;
    // Start the timer by calling the interval function
    elapsedTime = pausedElapsedTime; // Restore the elapsed time
    
    
    timerInterval = setInterval(() => {
      updateTimer();
    }, 10);
  }
                                  //Bagian tutup PauseGame
  
    const country = document.getElementById("country");
    const countryOpponent = document.getElementById("country_opponent");
  
    characterIdle[0].src = `./Characters/Character%20${country.value}/Idle/Idle_000.png`;
    characterIdle[1].src = `./Characters/Character%20${country.value}/Idle/Idle_001.png`;
    characterIdle[2].src = `./Characters/Character%20${country.value}/Idle/Idle_002.png`;
    characterIdle[3].src = `./Characters/Character%20${country.value}/Idle/Idle_003.png`;
    characterIdle[4].src = `./Characters/Character%20${country.value}/Idle/Idle_004.png`;
    characterIdle[5].src = `./Characters/Character%20${country.value}/Idle/Idle_005.png`;
    characterIdle[6].src = `./Characters/Character%20${country.value}/Idle/Idle_006.png`;
    characterIdle[7].src = `./Characters/Character%20${country.value}/Idle/Idle_007.png`;
    characterIdle[8].src = `./Characters/Character%20${country.value}/Idle/Idle_008.png`;
    characterIdle[9].src = `./Characters/Character%20${country.value}/Idle/Idle_009.png`;
    characterIdle[10].src = `./Characters/Character%20${country.value}/Idle/Idle_010.png`;
    characterIdle[11].src = `./Characters/Character%20${country.value}/Idle/Idle_011.png`;
    characterIdle[12].src = `./Characters/Character%20${country.value}/Idle/Idle_012.png`;
    characterIdle[13].src = `./Characters/Character%20${country.value}/Idle/Idle_013.png`;
    characterIdle[14].src = `./Characters/Character%20${country.value}/Idle/Idle_014.png`;
    characterIdle[15].src = `./Characters/Character%20${country.value}/Idle/Idle_015.png`;
    characterIdle[16].src = `./Characters/Character%20${country.value}/Idle/Idle_016.png`;
    characterIdle[17].src = `./Characters/Character%20${country.value}/Idle/Idle_017.png`;
  
    characterMoveForward[0].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_000.png`;
    characterMoveForward[1].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_001.png`;
    characterMoveForward[2].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_002.png`;
    characterMoveForward[3].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_003.png`;
    characterMoveForward[4].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_004.png`;
    characterMoveForward[5].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_005.png`;
    characterMoveForward[6].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_006.png`;
    characterMoveForward[7].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_007.png`;
    characterMoveForward[8].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_008.png`;
    characterMoveForward[9].src = `./Characters/Character%20${country.value}/Move%20Forward/Move%20Forward_009.png`;
  
    CharacterMoveBackward[0].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_000.png`;
    CharacterMoveBackward[1].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_001.png`;
    CharacterMoveBackward[2].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_002.png`;
    CharacterMoveBackward[3].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_003.png`;
    CharacterMoveBackward[4].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_004.png`;
    CharacterMoveBackward[5].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_005.png`;
    CharacterMoveBackward[6].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_006.png`;
    CharacterMoveBackward[7].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_007.png`;
    CharacterMoveBackward[8].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_008.png`;
    CharacterMoveBackward[9].src = `./Characters/Character%20${country.value}/Move%20Backward/Move%20Backward_009.png`;
  
    CharacterJump[0].src = `./Characters/Character%20${country.value}/Jump/Jump_000.png`;
    CharacterJump[1].src = `./Characters/Character%20${country.value}/Jump/Jump_001.png`;
    CharacterJump[2].src = `./Characters/Character%20${country.value}/Jump/Jump_002.png`;
    CharacterJump[3].src = `./Characters/Character%20${country.value}/Jump/Jump_003.png`;
    CharacterJump[4].src = `./Characters/Character%20${country.value}/Jump/Jump_004.png`;
  
    CharacterKick[0].src = `./Characters/Character%20${country.value}/Kick/Kick_000.png`;
    CharacterKick[1].src = `./Characters/Character%20${country.value}/Kick/Kick_001.png`;
    CharacterKick[2].src = `./Characters/Character%20${country.value}/Kick/Kick_002.png`;
    CharacterKick[3].src = `./Characters/Character%20${country.value}/Kick/Kick_003.png`;
    CharacterKick[4].src = `./Characters/Character%20${country.value}/Kick/Kick_004.png`;
    CharacterKick[5].src = `./Characters/Character%20${country.value}/Kick/Kick_005.png`;
    CharacterKick[6].src = `./Characters/Character%20${country.value}/Kick/Kick_006.png`;
    CharacterKick[7].src = `./Characters/Character%20${country.value}/Kick/Kick_007.png`;
    CharacterKick[8].src = `./Characters/Character%20${country.value}/Kick/Kick_008.png`;



    characterIdle2[0].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_000.png`;
    characterIdle2[1].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_001.png`;
    characterIdle2[2].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_002.png`;
    characterIdle2[3].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_003.png`;
    characterIdle2[4].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_004.png`;
    characterIdle2[5].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_005.png`;
    characterIdle2[6].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_006.png`;
    characterIdle2[7].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_007.png`;
    characterIdle2[8].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_008.png`;
    characterIdle2[9].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_009.png`;
    characterIdle2[10].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_010.png`;
    characterIdle2[11].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_011.png`;
    characterIdle2[12].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_012.png`;
    characterIdle2[13].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_013.png`;
    characterIdle2[14].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_014.png`;
    characterIdle2[15].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_015.png`;
    characterIdle2[16].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_016.png`;
    characterIdle2[17].src = `./Characters/Character%20${countryOpponent.value}/Idle/Idle_017.png`;
  
    characterMoveForward2[0].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_000.png`;
    characterMoveForward2[1].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_001.png`;
    characterMoveForward2[2].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_002.png`;
    characterMoveForward2[3].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_003.png`;
    characterMoveForward2[4].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_004.png`;
    characterMoveForward2[5].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_005.png`;
    characterMoveForward2[6].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_006.png`;
    characterMoveForward2[7].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_007.png`;
    characterMoveForward2[8].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_008.png`;
    characterMoveForward2[9].src = `./Characters/Character%20${countryOpponent.value}/Move%20Forward/Move%20Forward_009.png`;
  
    CharacterMoveBackward2[0].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_000.png`;
    CharacterMoveBackward2[1].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_001.png`;
    CharacterMoveBackward2[2].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_002.png`;
    CharacterMoveBackward2[3].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_003.png`;
    CharacterMoveBackward2[4].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_004.png`;
    CharacterMoveBackward2[5].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_005.png`;
    CharacterMoveBackward2[6].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_006.png`;
    CharacterMoveBackward2[7].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_007.png`;
    CharacterMoveBackward2[8].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_008.png`;
    CharacterMoveBackward2[9].src = `./Characters/Character%20${countryOpponent.value}/Move%20Backward/Move%20Backward_009.png`;
  
    CharacterJump2[0].src = `./Characters/Character%20${countryOpponent.value}/Jump/Jump_000.png`;
    CharacterJump2[1].src = `./Characters/Character%20${countryOpponent.value}/Jump/Jump_001.png`;
    CharacterJump2[2].src = `./Characters/Character%20${countryOpponent.value}/Jump/Jump_002.png`;
    CharacterJump2[3].src = `./Characters/Character%20${countryOpponent.value}/Jump/Jump_003.png`;
    CharacterJump2[4].src = `./Characters/Character%20${countryOpponent.value}/Jump/Jump_004.png`;
  
    CharacterKick2[0].src = `./Characters/Character%20${countryOpponent.value}/Kick/Kick_000.png`;
    CharacterKick2[1].src = `./Characters/Character%20${countryOpponent.value}/Kick/Kick_001.png`;
    CharacterKick2[2].src = `./Characters/Character%20${countryOpponent.value}/Kick/Kick_002.png`;
    CharacterKick2[3].src = `./Characters/Character%20${countryOpponent.value}/Kick/Kick_003.png`;
    CharacterKick2[4].src = `./Characters/Character%20${countryOpponent.value}/Kick/Kick_004.png`;
    CharacterKick2[5].src = `./Characters/Character%20${countryOpponent.value}/Kick/Kick_005.png`;
    CharacterKick2[6].src = `./Characters/Character%20${countryOpponent.value}/Kick/Kick_006.png`;
    CharacterKick2[7].src = `./Characters/Character%20${countryOpponent.value}/Kick/Kick_007.png`;
    CharacterKick2[8].src = `./Characters/Character%20${countryOpponent.value}/Kick/Kick_008.png`;
  
    // Sembunyikan elemen yang tidak diperlukan (form dan elemen lainnya)
    document.querySelector(".container").style.display = "none";
    document.querySelector(".canvas-container").style.display = "block";

    setTimeout(spawnBerlian, 5000);
    setTimeout(spawnDecrease, 3000);
    setTimeout(spawnIncrease, 6000);
  
    // Start the timer by storing the current time
    // Mulai pembaruan dan rendering permainan
    update();
  }

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;

// deklarasi:
let pausedElapsedTime = 0;
let isPaused = false;

let freezeBall = false;
let freezeTime = 3000; // 3 seconds in milliseconds

// - let (Pembuatan variabel berisi nilainya yang hanya bisa digunakan secara lokal) - 
let x = 200;
let y = 310;
let vxr = 0;
let vxl = 0;
let vy = 0;
let kick = false;

let x2 = 650;
let y2 = 310;
let vxr2 = 0;
let vxl2 = 0;
let vy2 = 0;
let kick2 = false;

let grounded = false;
let grounded2 = false;

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let elapsedTime = 0;
let timerDuration;

// - Penyimpanan gambar yang muncul dilayar - 
const BackgorundImage = new Image();
BackgorundImage.src = "./Sprites/background1.jpg";

const gravity = 0.1; // Sesuaikan nilai gravitasi sesuai kebutuhan

const berlian = {
  img: new Image(),
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  vy: 0,
  ay: 0.006,
  reachedBottom: false,
  loaded: false,
  disappearTime: 0, // New property to store the time when the diamond disappears
};

function spawnBerlian() {
  berlian.x = Math.floor(Math.random() * (canvas.width - 240));
  berlian.y = 0;
  berlian.vy = 0;
  berlian.reachedBottom = false;

  berlian.img.src = "./Sprites/Diamond%20Ice.png";
  berlian.img.onload = () => {
    berlian.loaded = true;
  };
}

function drawBerlian() {
  if (berlian.loaded) {
    ctx.drawImage(
      berlian.img,
      berlian.x,
      berlian.y,
      berlian.width,
      berlian.height
    );
  }
}



const Decrease = {
  img: new Image(),
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  vy: 0,
  ay: 0.006,
  reachedBottom: false,
  loaded: false,
  disappearTime: 0, // New property to store the time when the diamond disappears
};

function spawnDecrease() {
  Decrease.x = Math.floor(Math.random() * (canvas.width - 240));
  Decrease.y = 0;
  Decrease.vy = 0;
  Decrease.reachedBottom = false;

  Decrease.img.src = "./Sprites/Decrease Ball.png";
  Decrease.img.onload = () => {
    Decrease.loaded = true;
  };
}

function drawDecrease() {
  if (Decrease.loaded) {
    ctx.drawImage(
      Decrease.img,
      Decrease.x,
      Decrease.y,
      Decrease.width,
      Decrease.height
    );
  }
}



const increase = {
  img: new Image(),
  x: 0,
  y: 0,
  width: 50,
  height: 50,
  vy: 0,
  ay: 0.006,
  reachedBottom: false,
  loaded: false,
  disappearTime: 0, // New property to store the time when the diamond disappears
};

function spawnIncrease() {
  increase.x = Math.floor(Math.random() * (canvas.width - 240));
  increase.y = 0;
  increase.vy = 0;
  increase.reachedBottom = false;

  increase.img.src = "./Sprites/Increase%20Ball.png";
  increase.img.onload = () => {
    increase.loaded = true;
  };
}

function drawIncrease() {
  if (increase.loaded) {
    ctx.drawImage(
      increase.img,
      increase.x,
      increase.y,
      increase.width,
      increase.height
    );
  }
}

const gawang1 = new Image();
gawang1.src = "./Sprites/GoalSide.png";

const gawang2 = new Image();
gawang2.src = "./Sprites/GoalSide.png";

const golGawang1 = {
    x: 100,
    y: 320,
    width: 2,
    height: 400,

    draw: function(){
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.fillRect(golGawang1.x, golGawang1.y, golGawang1.width, golGawang1.height);
    }
}

const golGawang2 = {
    x: 880,
    y: 320,
    width: 2,
    height: 400,

    draw: function(){
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.fillRect(golGawang2.x, golGawang2.y, golGawang2.width, golGawang2.height);
    }
}

const penghalang1 = {
    x: 858,
    y: 310,
    width: 60,
    height: 10,

    draw: function(){
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.fillRect(penghalang1.x, penghalang1.y, penghalang1.width, penghalang1.height);
    }
}

const penghalang2 = {
    x: 80,
    y: 310,
    width: 60,
    height: 10,

    draw: function(){
        ctx.fillStyle = "rgba(0, 0, 0, 0)";
        ctx.fillRect(penghalang2.x, penghalang2.y, penghalang2.width, penghalang2.height);
    }
}

const Bola = {
  img: new Image(),
  x: canvas.width / 2 - 35,
  y: canvas.height - 290,
  vx: 0,
  vy: 0,
  ay: 0.15, // Acceleration due to gravity
  radius: 32, // Radius of the ball
  mass: 1, // Mass of the ball
};
Bola.img.src = "./Sprites/Ball 02.png";
Bola.isBouncing = false;

function update() {
    console.log(country.value);
    if (isPaused) {
      return;
    }
    ctx.drawImage(BackgorundImage, 0, 0, canvas.width, canvas.height);

      // Membuat variabel menyimpan pergerakan karakter
      x += vxr;
      x += vxl;
      y += vy;

      // Membuat variabel menyimpan pergerakan karakter 2
      x2 += vxr2;
      x2 += vxl2;
      y2 += vy2;

      // Membuat variabel menyimpan pergerakan Bola
      Bola.x += Bola.vx;
      Bola.y += Bola.vy;
      Bola.vy += Bola.ay;

      // Bounce effect
      Bola.vy += gravity; 

      const textX = 450 + 100 / 2;
      const textY = 100 + 100 / 2;
  
      // Menggambar teks
      ctx.font = "15px Arial";
      ctx.fillStyle = "blue";
      ctx.fillText("TIMER", textX - 23, textY + 5);
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 3;
        
      ctx.font = "40px Arial";
      ctx.fillStyle = "red";
      const timeLeft = timerDuration - elapsedTime;
      const timeString = timeLeft.toFixed();
      ctx.fillText(
        timeString,
        textX - ctx.measureText(timeString).width / 2,
        textY + 45
      );
      ctx.strokeStyle = "red";
      ctx.lineWidth = 3;
      ctx.strokeText(
        timeString,
        textX - ctx.measureText(timeString).width / 2,
        textY + 45
      );
    
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(scorePlayer1, 430, 100);
      ctx.fillText(scorePlayer2, canvas.width - 430, 100);
    
      let namaValue = document.getElementById("nama").value;
      ctx.font = "20px Arial";
    
      // Mengukur lebar teks
      let textWidth = ctx.measureText(namaValue).width;
    
      // Mengatur background color dengan border radius
      let borderRadius = 20;
      ctx.fillStyle = "grey";
      ctx.beginPath();
      ctx.moveTo(45 + borderRadius, 35);
      ctx.lineTo(45 + textWidth + 40 - borderRadius, 35);
      ctx.quadraticCurveTo(
        45 + textWidth + 40,
        35,
        45 + textWidth + 40,
        35 + borderRadius
      );
      ctx.lineTo(45 + textWidth + 40, 35 + 35 - borderRadius);
      ctx.quadraticCurveTo(
        45 + textWidth + 40,
        35 + 35,
        45 + textWidth + 40 - borderRadius,
        35 + 35
      );
      ctx.lineTo(45 + borderRadius, 35 + 35);
      ctx.quadraticCurveTo(45, 35 + 35, 45, 35 + 35 - borderRadius);
      ctx.lineTo(45, 35 + borderRadius);
      ctx.quadraticCurveTo(45, 35, 45 + borderRadius, 35);
      ctx.closePath();
      ctx.fill();
    
      // Mengatur warna teks
      ctx.fillStyle = "white";
      ctx.fillText(namaValue, 65, 60); // Mulai dari (65, 6f0) untuk memberikan sedikit padding dari border kotak
    
      let countryValue = document.getElementById("country").value;
      let countryOpponentValue = document.getElementById("country_opponent").value;
    
      // Mendapatkan nama file gambar dari value dari select element
      let countryFileName = countryValue.replace(/ /g, "_").toLowerCase() + ".png";
      let countryOpponentFileName =
        countryOpponentValue.replace(/ /g, "_").toLowerCase() + ".png";
    
      // Menggambar teks di tengah kanvas
      ctx.font = "23px Arial";
      ctx.fillStyle = "black";
    
      // Menggambar teks dari select country
      let countryTextWidth = ctx.measureText(countryValue).width;
      let countryOpponentTextWidth = ctx.measureText(countryOpponentValue).width;

      // Menggambar teks dari select country dan country_opponent bersebelahan
      let totalTextWidth = countryTextWidth + countryOpponentTextWidth + 250; // 10 adalah jarak antara kedua teks
      let startX = (canvas.width - totalTextWidth) / 2;
    
      ctx.fillText(countryValue, startX, 155);
      ctx.fillText(countryOpponentValue, startX + countryTextWidth + 250, 155);
    
      // Menggambar bendera setelah menggambar teks nama negara dan negara lawan
      let countryFlagImage = new Image();
      countryFlagImage.src = "Sprites/Flag/" + countryFileName;
    
      let countryOpponentFlagImage = new Image();
      countryOpponentFlagImage.src = "Sprites/Flag/" + countryOpponentFileName;
    
      // Gambar bendera setelah menggambar teks
      ctx.drawImage(countryFlagImage, startX, 65, 77, 54); // startX - 40 agar gambar berada di sebelah kiri nama negara
    
      ctx.drawImage(
          countryOpponentFlagImage,
          startX + countryTextWidth + 250,
          65,
          77,
          54
      ); // startX + countryTextWidth + 20 agar gambar berada di sebelah kanan nama negara

      // Variabel untuk menyimpan urutan bendera
      const flagSequence = [];

      // Menambahkan bendera karakter yang dipilih dengan cara perulangan
      for (let i = 0; i < 8; i++) {
          flagSequence.push(countryValue);
          flagSequence.push(countryOpponentValue);
      }

      // Menggambar urutan bendera sesuai dengan negara yang pilih
      for (let i = 0; i < flagSequence.length; i++) {
          const flagImage = new Image();
          const flagFileName =
          flagSequence[i].replace(/ /g, "_").toLowerCase() + ".png";
          flagImage.src = "Sprites/Flag/" + flagFileName;

          // Menggambar bendera di posisi yang diinginkan
          const flagX = 0 + i * 77; // 77 adalah lebar bendera
          const flagY = 380; // Y-coordinate untuk posisi bendera
          ctx.drawImage(flagImage, flagX, flagY, 80, 60);
      }

        drawCharacter();
        drawCharacter2();

        ctx.drawImage(Bola.img, Bola.x, Bola.y, Bola.radius * 2, Bola.radius * 2);
        penghalang1.draw();
        penghalang2.draw();
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(
          gawang2,
          -canvas.width / 2 - 463,
          canvas.height - 290,
          100,
          200
        );
        ctx.restore();
        ctx.drawImage(gawang1, canvas.width / 2 - 465, canvas.height - 290, 100, 200);
        golGawang1.draw();
        golGawang2.draw();
        drawBerlian();
        drawDecrease();
        drawIncrease();
        
    collision();
    FungsiBola();
    fungsi_Berlian();
    fungsi_Decrease();
    fungsi_Increase();
    mainLoop();
    requestAnimationFrame(update);
}

//                                            - Sebuah kondisi ketika game di reset - 
function resetGame() {
    x = 200;
    y = 310;
    vxr = 0;
    vxl = 0;
    vy = 0;

    x2 = 650;
    y2 = 310;
    vxr2 = 0;
    vxl2 = 0;
    vy2 = 0;

    Bola.x = canvas.width / 2 - 35;
    Bola.y = canvas.height - 290;
    Bola.vx = 0;
    Bola.vy = 0;
}
//                                     - Function yang mengatur sebuah peraturan pada game -
function collision() {
  if( x >= canvas.width - 220){
      x = canvas.width - 220;
  }
  if( x <= canvas.width - 920){
      x = canvas.width - 920;
  }
  if( y >= canvas.height - 230){
      y = canvas.height - 230;
      grounded = true;
  }else{
      grounded = false;
  }

  if( x2 >= canvas.width - 220){
      x2 = canvas.width - 220;
  }
  if( x2 <= canvas.width - 920){
      x2 = canvas.width - 920;
  }
  if( y2 >= canvas.height - 230){
      y2 = canvas.height - 230;
      grounded2 = true;
  }else{
      grounded2 = false;
  }
}

let lastUpdateTime = performance.now(); // Waktu terakhir pembaruan

function mainLoop() {
  // Hitung delta waktu
  const currentTime = performance.now();
  const deltaTime = currentTime - lastUpdateTime;
  lastUpdateTime = currentTime;

  if (freezeBall) {
    // Set kecepatan bola menjadi 0
    Bola.vx = 0;
    Bola.vy = 0;
    
  }
  

  // Kurangi freezeTime berdasarkan delta waktu
  freezeTime -= deltaTime;

  if (freezeTime <= 0) {
    freezeBall = false; // Atur flag freezeBall menjadi false

    // Panggil kembali FungsiBola setelah 3 detik
    setTimeout(() => {
      FungsiBola();
          // Efek Pantulan
    if( Bola.y + Bola.radius >= canvas.height - 140){
        Bola.y = canvas.height - 140 - Bola.radius;
        Bola.vy = -Bola.vy * 0.7;
        
        if(Math.abs(Bola.vy) < 1){
          Bola.vy = 0;
        }
    }
    }, 3000);
  }

  // Check jika bola bersentuhan dengan Berlian
  var ballCenterX = Bola.x + Bola.radius; // Titik tengah bola
  var ballCenterY = Bola.y + Bola.radius;
  var berlianCenterX = berlian.x + berlian.width / 2; // Titik tengah berlian
  var berlianCenterY = berlian.y + berlian.height / 2;

  if (
    Math.abs(ballCenterX - berlianCenterX) < Bola.radius + berlian.width / 2 &&
    Math.abs(ballCenterY - berlianCenterY) < Bola.radius + berlian.height / 2
  ) {
    // Set flag freezeBall dan inisialisasi waktu pembekuan
    freezeBall = true;
    freezeTime = 3000; // Atur waktu pembekuan selama 3 detik
    berlian.reachedBottom = false; // Set berlian.reachedBottom kembali menjadi false agar bisa spawn kembali
    spawnBerlian(); // Memanggil fungsi spawnBerlian untuk menempatkan berlian baru di layar
  }
}


//                                      - Function yang mengatur pengaturan Bola dalam game -
function FungsiBola() {
    // Check if the ball collides with Berlian
    var ballCenterX = Bola.x + Bola.radius; // Titik tengah bola
    var ballCenterY = Bola.y + Bola.radius;
    var DecreaseCenterX = Decrease.x + Decrease.width / 2; // Titik tengah Decrease
    var DecreaseCenterY = Decrease.y + Decrease.height / 2;

    if (
      Math.abs(ballCenterX - DecreaseCenterX) < (Bola.radius + Decrease.width / 2) &&
      Math.abs(ballCenterY - DecreaseCenterY) < (Bola.radius + Decrease.height / 2)
    ) {
      Bola.radius -= 10;

      Decrease.reachedBottom = false; 
      spawnDecrease(); 

      setTimeout(()  => {
        Bola.radius +=10;
      
      }, 3000);
    }


    var ballCenterX = Bola.x + Bola.radius; // Titik tengah bola
    var ballCenterY = Bola.y + Bola.radius;
    var increaseCenterX = increase.x + increase.width / 2; // Titik tengah increase
    var increaseCenterY = increase.y + increase.height / 2;

    if (
      Math.abs(ballCenterX - increaseCenterX) < (Bola.radius + increase.width / 2) &&
      Math.abs(ballCenterY - increaseCenterY) < (Bola.radius + increase.height / 2)
    ) {
      // Set freezeBall flag and initiate freeze time
      Bola.radius += 7
      Bola.width += 7
      Bola.height += 7

      increase.reachedBottom = false// Set berlian.reachedBottom kembali menjadi false agar bisa spawn kembali
            spawnIncrease(); // Memanggil fungsi spawnBerlian untuk menempatkan berlian baru di layar
      setTimeout(()=>{
        Bola.radius -= 7
        Bola.width -= 7
        Bola.height -= 7
      },3000);
      
    }


    // Efek Pantulan
    if( Bola.y + Bola.radius >= canvas.height - 140){
        Bola.y = canvas.height - 140 - Bola.radius;
        Bola.vy = -Bola.vy * 0.7;
        
        if(Math.abs(Bola.vy) < 1){
          Bola.vy = 0;
        }
    }

    // Pantulan Bola terhadap batasan
    if( Bola.x + Bola.radius > canvas.width - 100){
        Bola.vx += -1;
    }
    if( Bola.x + Bola.radius < canvas.width - 900){
        Bola.vx += 0.9;
    }
    if( Bola.y + Bola.radius > canvas.height){
        Bola.vy += -1;
    }

    // Pantulan terhadap batasan gawang
    if(
        Bola.x + Bola.radius > penghalang1.x &&
        Bola.x - Bola.radius < penghalang1.x + penghalang1.width &&
        Bola.y + Bola.radius > penghalang1.y &&
        Bola.y - Bola.radius < penghalang1.y + penghalang1.height
    ) {
        Bola.vy *= -0.7;
    }
    if(
        Bola.x + Bola.radius > penghalang2.x &&
        Bola.x - Bola.radius < penghalang2.x + penghalang2.width &&
        Bola.y + Bola.radius > penghalang2.y &&
        Bola.y - Bola.radius < penghalang2.y + penghalang2.height
    ) {
        Bola.vy *= -0.7;
    }
    
    if (
      Bola.x < golGawang1.x + golGawang1.width && Bola.y > golGawang1.y
    ) {
      scorePlayer2++;
      resetGame(); // Fungsi untuk mengatur ulang posisi karakter dan bola
    }
    // Jika bola masuk ke gawang player 2
    if (
      Bola.x + Bola.radius * 2 > golGawang2.x && Bola.y > golGawang2.y 
    ) {
      scorePlayer1++;
      resetGame(); // Fungsi untuk mengatur ulang posisi karakter dan bola
    }
}

function fungsi_Berlian() {
  // Set initial velocity only when Berlian spawns
  if (berlian.y >= canvas.height - berlian.height) {
    if (!berlian.reachedBottom) {
      
      berlian.reachedBottom = true;
      berlian.y = canvas.height;
      // Mengatur spawn kembali Berlian setelah 5 detik
      setTimeout(() => {
        berlian.reachedBottom = false; // Set berlian.reachedBottom kembali menjadi false agar bisa spawn kembali
        spawnBerlian(); // Memanggil fungsi spawnBerlian untuk menempatkan berlian baru di layar
        berlian.visible = true;
      }, 5000);
    }
  } else {
    // Update Berlian's position only if it hasn't reached the bottom
    berlian.y += berlian.vy;
    berlian.vy += berlian.ay;

    // Check if Berlian should disappear
    if (
      !berlian.reachedBottom &&
      x + 70 > berlian.x &&
      x + 70 < berlian.x + berlian.width &&
      y + 70 > berlian.y &&
      y + 70 < berlian.y + berlian.height
    ) {
      berlian.reachedBottom = true;
    }
  }
}


function fungsi_Decrease() {
  // Set initial velocity only when Berlian spawns
  if (Decrease.y >= canvas.height - Decrease.height) {
    if (!Decrease.reachedBottom) {
      // Set Decrease.reachedBottom menjadi true untuk mencegah pemanggilan berulang spawnDecrease
      Decrease.reachedBottom = true;
      Decrease.y = canvas.height;


      // Mengatur spawn kembali Decrease setelah 5 detik
      setTimeout(() => {
        Decrease.reachedBottom = false; // Set Decrease.reachedBottom kembali menjadi false agar bisa spawn kembali
        spawnDecrease(); // Memanggil fungsi spawnDecrease untuk menempatkan Decrease baru di layar
      }, 3000);
    }
  } else {
    // Update Decrease's position only if it hasn't reached the bottom
    Decrease.y += Decrease.vy;
    Decrease.vy += Decrease.ay;

    // Check if Decrease should disappear
    if (
      !Decrease.reachedBottom &&
      x + 70 > Decrease.x &&
      x + 70 < Decrease.x + Decrease.width &&
      y + 70 > Decrease.y &&
      y + 70 < Decrease.y + Decrease.height
    ) {
      Decrease.reachedBottom = true;
      Decrease.disappearTime = Date.now();

      // Menghilangkan Decrease selama 5 detik
      setTimeout(() => {
        Decrease.reachedBottom = false;
        Decrease.y = 0;
        Decrease.vy = 0;
      }, 3000);
    }
  }
}

function fungsi_Increase() {
  // Set initial velocity only when Berlian spawns
  if (increase.y >= canvas.height - increase.height) {
    if (!increase.reachedBottom) {
      // Set increase.reachedBottom menjadi true untuk mencegah pemanggilan berulang spawnincrease
      increase.reachedBottom = true;
      increase.y = canvas.height;


      // Mengatur spawn kembali increase setelah 5 detik
      setTimeout(() => {
        increase.reachedBottom = false// Set berlian.reachedBottom kembali menjadi false agar bisa spawn kembali
        spawnIncrease(); // Memanggil fungsi spawnBerlian untuk menempatkan berlian baru di layar
      }, 8000);
    }
  } else {
    // Update increase's position only if it hasn't reached the bottom
    increase.y += increase.vy;
    increase.vy += increase.ay;

    // Check if increase should disappear
    if (
      !increase.reachedBottom &&
      x + 70 > increase.x &&
      x + 70 < increase.x + increase.width &&
      y + 70 > increase.y &&
      y + 70 < increase.y + increase.height
    ) {
      increase.reachedBottom = true;
      increase.disappearTime = Date.now();

      // Menghilangkan increase selama 5 detik
      setTimeout(() => {
        increase.reachedBottom = false;
        increase.y = 0;
        increase.vy = 0;
      }, 12000);
    }
  }
}


// Call fungsi_Berlian function in your game loop or wherever you handle updates

//                                        - Function yang mengatur gravitasi dalam game -
setInterval(function Gravity() {
    // Gravitasi karakter 1
    if (!grounded2) {
      vy2 += 0.18;
    } else {
      vy2 = 0; 
    }

    // Gravitasi karakter 2
    if (!grounded) {
      vy += 0.18;
    } else {
      vy = 0; 
    }
});

// Menyimpan gambar karakter perframe
const characterIdle = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];
const characterMoveForward = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];
const CharacterMoveBackward = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];
const CharacterJump = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];
const CharacterKick = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];

// Menyimpan gambar karakter 2 perframe
const characterIdle2 = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];
const characterMoveForward2 = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];
const CharacterMoveBackward2 = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];
const CharacterJump2 = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];
const CharacterKick2 = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
];

// Atur kecepatan animasi Karakter 1
let currentIdleFrame = 0;
let currentMajuFrame = 0;
let currentMundurFrame = 0;
let currentJumpFrame = 0;
let currentKickFrame = 0;
const PukulFrameSpeed = 1;

// Atur kecepatan animasi Karakter 2
let currentIdleFrame2 = 0;
let currentKickFrame2 = 0;
let currentMajuFrame2 = 0;
let currentMundurFrame2 = 0;
let currentJumpFrame2 = 0;
const PukulFrameSpeed2 = 1;

// Menggambar karakter ketika Menendang
function drawKick() {
    if (kick && currentKickFrame < CharacterKick.length) {
      ctx.drawImage(CharacterKick[currentKickFrame], x, y, 140, 140);
      currentKickFrame++;
    }
}
// Menggambar karakter ketika Idle
function drawIdle() {
    if (currentIdleFrame >= characterIdle.length) {
      currentIdleFrame = 0;
    }
    ctx.drawImage(characterIdle[currentIdleFrame], x, y, 140, 140);
    currentIdleFrame ++;
}
// Menggambar karakter ketika Mundur
function drawMundur() {
    if (currentMundurFrame >= CharacterMoveBackward.length) {
      currentMundurFrame = 0;
    }
    ctx.drawImage(CharacterMoveBackward[currentMundurFrame], x, y, 140, 140);
    currentMundurFrame ++;
}
// Menggambar karakter ketika Maju
function drawMaju() {
    if (currentMajuFrame >= characterMoveForward.length) {
      currentMajuFrame = 0;
    }
    ctx.drawImage(characterMoveForward[currentMajuFrame], x, y, 140, 140);
    currentMajuFrame ++;
}
// Menggambar karakter ketika Melompat
function drawJump() {
    if (currentJumpFrame >= CharacterJump.length) {
      currentJumpFrame = 0;
    }
    ctx.drawImage(CharacterJump[currentJumpFrame], x, y, 140, 140);
    currentJumpFrame++;
}
// Mengatur kapan karakter mengeluarkan animasi
function drawCharacter() {
    if (kick && currentKickFrame < CharacterKick.length) {
      ctx.drawImage(CharacterKick[currentKickFrame], x, y, 140, 140);

      if (
        Bola.x < x + 140 &&
        Bola.x + Bola.radius * 2 > x &&
        Bola.y < y + 140 &&
        Bola.y + Bola.radius * 2 > y
      ) {
        // Jika karakter tidak menggunakan frame kick
        if (!drawKick) {
          // Karakter tidak menggunakan frame kick, biarkan bola melewati karakter
          // Logika tumbukan biasa
        } else {
          // Jika karakter menggunakan frame kick, atur bola untuk memantul
          Bola.vx = 5; // Atur kecepatan horizontal (sesuai kebutuhan)
          Bola.vy = -8; // Atur kecepatan vertikal (sesuai kebutuhan)
        }
      }

      currentKickFrame += PukulFrameSpeed;
    } else if (vy < 0) {
      drawJump();
    } else if (vxr > 0) {
      drawMaju();
    } else if (vxl < 0) {
      drawMundur();
    } else {
      drawIdle();
    }
}

// Menggambar karakter ketika Menendang
function drawKick2() {
    if (kick && currentKickFrame2 < CharacterKick2.length) {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(CharacterKick2[currentKickFrame2], -x2 - 140, y2, 140, 140);
      currentKickFrame2++;
      ctx.restore();
    }
}
// Menggambar karakter ketika Idle
function drawIdle2() {
    if (currentIdleFrame2 >= characterIdle2.length) {
      currentIdleFrame2 = 0;
    }
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(characterIdle2[currentIdleFrame2], -x2 - 140, y2, 140, 140); // Ubah posisi x dari x2 menjadi -x2 - lebar karakter
    currentIdleFrame2++;
    ctx.restore();
}
// Menggambar karakter ketika Mundur
function drawMundur2() {
    if (currentMundurFrame2 >= CharacterMoveBackward2.length) {
      currentMundurFrame2 = 0;
    }
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(CharacterMoveBackward2[currentMundurFrame2], -x2 - 140, y2, 140, 140);
    currentMundurFrame2 ++;
    ctx.restore();
}
// Menggambar karakter ketika Maju
function drawMaju2() {
    if (currentMajuFrame2 >= characterMoveForward2.length) {
      currentMajuFrame2 = 0;
    }
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(characterMoveForward2[currentMajuFrame2], -x2 - 140, y2, 140, 140);
    currentMajuFrame2 ++;
    ctx.restore();
}
// Menggambar karakter ketika Melompat
function drawJump2() {
    if (currentJumpFrame2 >= CharacterJump2.length) {
      currentJumpFrame2 = 0;
    }
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(CharacterJump2[currentJumpFrame2], -x2 - 140, y2, 140, 140);
    currentJumpFrame2++;
    ctx.restore();
}
// Mengatur kapan karakter mengeluarkan animasi
function drawCharacter2() {
  if (kick2 && currentKickFrame2 < CharacterKick2.length) {
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(CharacterKick2[currentKickFrame2], -x2 - 140, y2, 140, 140);
      currentKickFrame2 += PukulFrameSpeed2;
      ctx.restore();

      if (
        Bola.x < x2 + 140 &&
        Bola.x + Bola.radius * 2 > x2 &&
        Bola.y < y2 + 140 &&
        Bola.y + Bola.radius * 2 > y2
      ){
        if (!drawKick2) {

        } else {
          Bola.vx = - 5; // Atur kecepatan horizontal (sesuai kebutuhan)
          Bola.vy = - 8; // Atur kecepatan vertikal (sesuai kebutuhan)
        }
      }

  } else if (vy2 < 0) {
      drawJump2();
  } else if (vxr2 > 0) {
      drawMundur2();    
  } else if (vxl2 < 0) {
      drawMaju2();

  } else {
      drawIdle2();
  }
}

