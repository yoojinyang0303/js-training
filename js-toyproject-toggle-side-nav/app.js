// "use strict";

// 로컬스토리지 데이터 읽기
let toggleStatus = localStorage.getItem("toggleStatus");
const sideButton = document.querySelector("i");
const navBar = document.querySelector("nav");

const activeToggleStatus = () => {
  localStorage.setItem("toggleStatus", "active");
  navBar.classList.add("active");
};

const disableToggleStatus = () => {
  localStorage.setItem("toggleStatus", null);
  navBar.classList.remove("active");
};

if (toggleStatus === "active") activeToggleStatus();

sideButton.addEventListener("click", () => {
  if (toggleStatus !== "active") {
    activeToggleStatus();
  } else {
    disableToggleStatus();
  }
  // 클릭할 때마다 토글 상태값 초기화
  toggleStatus = localStorage.getItem("toggleStatus");
});
