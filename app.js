const TOTAL_TIME = 60; // seconds

let time = TOTAL_TIME;
let interval = null;

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");
const superdog = document.getElementById("superdog");

function updateTimer() {
  timerEl.textContent = `00:${time.toString().padStart(2, "0")}`;
}

function updatePuzzle() {
  const progress = (TOTAL_TIME - time) / TOTAL_TIME;

  const blur = 22 - progress * 22;          // 22px → 0px
  const brightness = 0.25 + progress * 0.75; // 0.25 → 1
  const scale = 1.6 - progress * 0.6;        // 1.6 → 1

  superdog.style.filter = `blur(${blur}px) brightness(${brightness})`;
  superdog.style.transform = `scale(${scale})`;
}

startBtn.addEventListener("click", () => {
  if (interval) return;

  time = TOTAL_TIME;
  updateTimer();
  updatePuzzle();

  interval = setInterval(() => {
    time--;
    updateTimer();
    updatePuzzle(); // 🔥 EVERY SECOND

    if (time <= 0) {
      clearInterval(interval);
      interval = null;

      superdog.style.filter = "none";
      superdog.style.transform = "scale(1)";

      alert("🎉 SUPER DOG SAVED THE TEETH!");
    }
  }, 1000);
});
