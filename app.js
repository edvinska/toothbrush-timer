let time = 120;
let interval = null;

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start");

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerEl.textContent =
    `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (interval) return;

  time = 120;
  updateDisplay();

  interval = setInterval(() => {
    time--;
    updateDisplay();

    if (time <= 0) {
      clearInterval(interval);
      interval = null;
      alert("🎉 All done! Great brushing!");
    }
  }, 1000);
});
