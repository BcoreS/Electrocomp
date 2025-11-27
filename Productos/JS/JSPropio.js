const audio = document.getElementById("audioFondo");
const btn = document.getElementById("btnAudio");
const icon = document.getElementById("iconAudio");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove("bi-music-note-beamed");
    icon.classList.add("bi-pause-fill");
  } else {
    audio.pause();
    icon.classList.remove("bi-pause-fill");
    icon.classList.add("bi-music-note-beamed");
  }
});
