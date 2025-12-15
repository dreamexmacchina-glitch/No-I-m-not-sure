// Easter egg: scrivi "glitch" → tema rosso-verde
let glitchSeq = "";
document.addEventListener("keydown", e => {
  glitchSeq += e.key.toLowerCase();
  if (glitchSeq.includes("glitch")) {
    document.body.className = "pixel-red-green";
    alert("🟥🟩 Tema glitch pixel attivato!");
  }
  if (glitchSeq.length > 10) glitchSeq = glitchSeq.slice(-6);
});

// Easter egg: scrivi "retro" → stile arcade
let retroSeq = "";
document.addEventListener("keydown", e => {
  retroSeq += e.key.toLowerCase();
  if (retroSeq.includes("retro")) {
    document.body.className = "arcade";
    alert("🕹️ Modalità arcade attivata!");
  }
  if (retroSeq.length > 10) retroSeq = retroSeq.slice(-5);
});

// Easter egg: scrivi "matrix" → effetto terminale
let matrixSeq = "";
document.addEventListener("keydown", e => {
  matrixSeq += e.key.toLowerCase();
  if (matrixSeq.includes("matrix")) {
    document.body.className = "matrix";
    alert("💾 Terminale attivato!");
  }
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

// Reset con tasto C
document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "c") {
    document.body.className = "";
    alert("🔁 Reset tema e easter egg.");
  }
});