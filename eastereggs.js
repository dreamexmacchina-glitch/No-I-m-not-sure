// Konami Code → Snake
const konami = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let pos = 0;
document.addEventListener("keydown", e => {
  if(e.key.toLowerCase() === konami[pos].toLowerCase()) {
    pos++;
    if(pos === konami.length) {
      document.getElementById("snake").style.display="block";
      alert("🐍 Snake attivato!");
      pos=0;
    }
  } else pos=0;
});

// Tasti singoli → Pong, Space, Musica, Glitch, Messaggio, Reset
document.addEventListener("keydown", e => {
  const key = e.key.toLowerCase();
  if (key === "p") {
    document.getElementById("pong").style.display = "block";
    alert("🏓 Pong attivato!");
  }
  if (key === "s") {
    document.getElementById("space").style.display = "block";
    alert("👾 Space Invaders attivato!");
  }
  if (key === "m") {
    alert("🎵 Musica segreta... (immaginaria)");
  }
  if (key === "x") {
    document.body.classList.toggle("glitch");
  }
  if (key === "?") {
    alert("🧙‍♂️ Il dubbio è l'inizio della saggezza.");
  }
  if (key === "c") {
    document.querySelectorAll("canvas").forEach(c => c.style.display = "none");
    document.getElementById("console").style.display = "none";
    document.body.className = "";
    alert("🔁 Reset tema e easter egg.");
  }
});

// Sequenze → open, dream, glitch, retro, matrix
let seq = "", dream = "", glitchSeq = "", retroSeq = "", matrixSeq = "";
document.addEventListener("keydown", e => {
  const k = e.key.toLowerCase();
  seq += k;
  dream += k;
  glitchSeq += k;
  retroSeq += k;
  matrixSeq += k;

  if (seq.includes("open")) {
    document.getElementById("console").style.display = "block";
  }
  if (dream.includes("d")) {
    document.body.style.background = "#002244";
    document.body.style.color = "#88ccff";
    alert("🌌 Tema onirico attivato!");
  }
  if (glitchSeq.includes("g")) {
    document.body.className = "pixel-red-green";
    alert("🟥🟩 Tema glitch pixel attivato!");
  }
  if (retroSeq.includes("r")) {
    document.body.className = "arcade";
    alert("🕹️ Modalità arcade attivata!");
  }
  if (matrixSeq.includes("m")) {
    document.body.className = "matrix";
    alert("💾 Terminale attivato!");
  }

  if (seq.length > 10) seq = seq.slice(-4);
  if (dream.length > 10) dream = dream.slice(-5);
  if (glitchSeq.length > 10) glitchSeq = glitchSeq.slice(-6);
  if (retroSeq.length > 10) retroSeq = retroSeq.slice(-5);
  if (matrixSeq.length > 10) matrixSeq = matrixSeq.slice(-6);
});

// Tap 5 volte sul titolo → messaggio segreto
let tapCount = 0;
let tapTimer;
document.getElementById("title").addEventListener("click", () => {
  tapCount++;
  clearTimeout(tapTimer);
  tapTimer = setTimeout(() => tapCount = 0, 1000);
  if (tapCount === 5) {
    alert("🔓 Hai trovato un messaggio segreto: 'Non fidarti del pixel...'");
    tapCount = 0;
  }
});

// Tocco prolungato sul titolo → tema glitch
let touchTimer;
document.getElementById("title").addEventListener("touchstart", () => {
  touchTimer = setTimeout(() => {
    document.body.className = "pixel-red-green";
    alert("🟥🟩 Tema glitch attivato via touch!");
  }, 1000);
});
document.getElementById("title").addEventListener("touchend", () => clearTimeout(touchTimer));

// Tocco prolungato sul footer → sfondo a scacchi
document.querySelector("footer").addEventListener("touchstart", () => {
  touchTimer = setTimeout(() => {
    document.body.className = "checkered";
    alert("🧩 Modalità pixel attivata!");
  }, 1000);
});
document.querySelector("footer").addEventListener("touchend", () => clearTimeout(touchTimer));