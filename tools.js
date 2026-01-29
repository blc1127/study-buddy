let seconds = 25 * 60
let running = false
let intervalId = 0

function formatTime(s) {
  const m = Math.floor(s / 60)
  const r = s % 60
  const mm = String(m)
  const rr = r < 10 ? "0" + String(r) : String(r)
  return mm + ":" + rr
}

function render() {
  const el = document.getElementById("timer")
  if (!el) return
  el.textContent = formatTime(seconds)
}

export function initTimer() {
  render()

  const startBtn = document.getElementById("timerStart")
  const resetBtn = document.getElementById("timerReset")

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (running) return
      running = true
      intervalId = window.setInterval(() => {
        if (seconds <= 0) {
          running = false
          window.clearInterval(intervalId)
          return
        }
        seconds -= 1
        render()
      }, 1000)
    })
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      running = false
      window.clearInterval(intervalId)
      seconds = 25 * 60
      render()
    })
  }
}
