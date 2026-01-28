const TOTAL_TIME = 60; // 1 minute
let time = TOTAL_TIME;
let interval = null;

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const superdog = document.getElementById("superdog");


let time = 120;
let interval = null;

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");

function updateDisplay() {
  const seconds = time % 60;
  timerEl.textContent = `00:${seconds.toString().padStart(2, "0")}`;
}

function revealSuperDog() {
  const progress = (TOTAL_TIME - time) / TOTAL_TIME;
  const blur = 20 - progress * 20;       // 20px → 0px
  const brightness = 0.3 + progress * 0.7; // 0.3 → 1
  const scale = 1.5 - progress * 0.5;     // 1.5 → 1

  superdog.style.filter = `blur(${blur}px) brightness(${brightness})`;
  superdog.style.transform = `scale(${scale})`;

startBtn.addEventListener("click", () => {
  if (interval) return;

  time = TOTAL_TIME;
  updateDisplay();
  revealSuperDog();

  interval = setInterval(() => {
    time--;
    updateDisplay();
    revealSuperDog();   // 🔥 every second reveal

    if (time <= 0) {
      clearInterval(interval);
      interval = null;

      superdog.style.filter = "none";
      superdog.style.transform = "scale(1)";

      alert("🎉 SUPER DOG REVEALED! GREAT JOB!");
    }
  }, 1000);
});
