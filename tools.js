let time = 25 * 60;

function startTimer() {
  setInterval(() => {
    if (time > 0) {
      time--;
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      document.getElementById("timer").textContent =
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
  }, 1000);
}
