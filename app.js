"use strict";

// 로컬스토리지 데이터 읽기
let toggleMode = localStorage.getItem("toggleMode");
const sideButton = document.querySelector("i");
const navBar = document.querySelector("nav");

const activeToggleMode = () => {
  navBar.classList.add("active");
  localStorage.setItem("toggleMode", "active");
};

const disableToggleMode = () => {
  navBar.classList.remove("active");
  localStorage.setItem("toggleMode", null);
};

if (toggleMode === "active") {
  activeToggleMode();
} else {
  disableToggleMode();
}

sideButton.addEventListener("click", () => {
  toggleMode = localStorage.getItem("toggleMode");
  if (toggleMode !== "active") {
    activeToggleMode();
  } else {
    // navBar.classList.remove("active");
    // localStorage.setItem("toggleMode", null);
    disableToggleMode();
  }
});
