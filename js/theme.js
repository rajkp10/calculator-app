const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

const toggleTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "theme-1") {
    setTheme("theme-2");
  } else if (theme === "theme-2") {
    setTheme("theme-3");
  } else {
    setTheme("theme-1");
  }
  changeToggleButtonPosition();
};

const changeToggleButtonPosition = () => {
  const theme = localStorage.getItem("theme");
  const toggleBtn = document.querySelector(".switch");
  if (theme === "theme-1") {
    toggleBtn.classList.remove("switch-theme-2", "switch-theme-3");
    toggleBtn.classList.add("switch-theme-1");
  } else if (theme === "theme-2") {
    toggleBtn.classList.remove("switch-theme-1", "switch-theme-3");
    toggleBtn.classList.add("switch-theme-2");
  } else {
    toggleBtn.classList.remove("switch-theme-1", "switch-theme-2");
    toggleBtn.classList.add("switch-theme-3");
  }
};

window.onload = function () {
  const theme = localStorage.getItem("theme");
  if (theme === "theme-2") {
    setTheme("theme-2");
  } else if (theme == "theme-3") {
    setTheme("theme-3");
  } else {
    setTheme("theme-1");
  }
  changeToggleButtonPosition();
};

export { toggleTheme };
