import { toggleTheme } from "./theme.js";

const audioKey = new Audio("https://www.fesliyanstudios.com/play-mp3/648");
const audioTogggle = new Audio("https://www.fesliyanstudios.com/play-mp3/641");

const toggleBtn = document.querySelector(".switch");

toggleBtn.addEventListener("click", () => {
  audioTogggle.play();
  toggleTheme();
});

const screen = document.querySelector(".screen-text");
const keys = Array.from(document.querySelectorAll(".key"));

keys.map((key) =>
  key.addEventListener("click", (e) => {
    audioKey.play();
    switch (e.target.innerText) {
      case "DEL":
        screen.value = screen.value.slice(0, -1);
        break;
      case "RESET":
        screen.value = "";
        break;
      case "x":
        screen.value += "*";
        break;
      case "=":
        try {
          screen.value = parseFloat(eval(screen.value)).toFixed(2);
        } catch (error) {
          screen.value = "Invalid Operation";
        }
        break;
      default:
        screen.value += e.target.innerText;
    }
  })
);
