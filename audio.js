let audio;

function startAudio() {
  if (!audio) {
    audio = new Audio("music.mp3");
    audio.loop = true;

    const startTime = 35;
    audio.currentTime = startTime;

    audio.play();
    sessionStorage.setItem("audioPlaying", true);

    window.audio = audio;

    setInterval(() => {
      sessionStorage.setItem("audioCurrentTime", audio.currentTime);
    }, 1000);
  }
}
