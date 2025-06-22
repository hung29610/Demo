// Pháo giấy confetti đơn giản
const colors = ["#fce18a", "#ff726d", "#b48def", "#f4306d"];
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.style.position = "fixed";
  confetti.style.width = "10px";
  confetti.style.height = "10px";
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.top = "-10px";
  confetti.style.left = Math.random() * window.innerWidth + "px";
  confetti.style.opacity = "0.8";
  confetti.style.borderRadius = "50%";
  confetti.style.zIndex = "9999";
  confetti.style.animation = "fall 3s linear infinite";
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 3000);
}
setInterval(createConfetti, 100);

// Nhạc sinh nhật
document.getElementById("playMusic").addEventListener("click", () => {
  const audio = document.getElementById("birthdaySong");
  audio.play();
});
