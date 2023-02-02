// 생각할 점!
// 1) Local Storage vs. Session Storage
//    --> for 토글 상태의 영속성
// 2) querySelector("")에서 시맨틱태그명 자체를 입력할 때는 작동하지만 클래스명을 입력할 때 or
//    getElementsBy~("")를 사용할 때는 함수 적용+.classList.toggle이 정상 적용되지 않은 이유는 무엇인가?

// function sideMenu() {
//   //   let menu = document.querySelector(".toggle"); --> error
//   //   let menu = document.getElementsByTagName("i"); --> error
//   //   let btn = document.getElementsByClassName("toggle bx bx-right-arrow-circle"); --> error
//   //   let btn = document.querySelector(".toggle bx bx-right-arrow-circle");
//   //   let side_bar = document.getElementsByTagName("nav");
//   let btn = document.querySelector("i");
//   let side_bar = document.querySelector("nav");
//   side_bar.classList.toggle("active");
//   btn.classList.toggle("active");
// }

// swimfm 참고
function toggleClick() {
  const toggleBtn = document.querySelector("i");
  if (!toggleClick) {
    return !1;
  } // 토글 버튼 없을 시 작동 종료
  const Realbody = document.querySelector("body");
  toggleClick.addEventListener("click", function (event) {
    if (!Realbody.classList.contains("active")) {
      Realbody.classList.add("active");
      localStorage.setItem("toggleMode", toggleBtn.checked);
    } else {
      Realbody.classList.remove("active");
      localStorage.setItem("toggleMode", toggleBtn.checked);
    }
  });
}
toggleClick();
document.addEventListener("DOMContentLoaded", function () {
  const Realbody = document.querySelector("body");
  const toggleMode = localStorage.getItem("toggleMode");
  if (toggleMode === "false") {
    return !1; // 아무런 행동 하지 않음
  } else {
    const toggleBtn = document.getElementsByClassName("toggle");
    toggleBtn.checked = true;
    Realbody.classList.add("active");
  }
});

// 상태 영속성을 제외하고는 정상인 것 같은 코드
// let btn = document.querySelector("i");
// let side_bar = document.querySelector("nav");

// function sideMenu() {
//   btn.classList.toggle("active");
//   side_bar.classList.toggle("active");
// }

// 상태 영속성 구현 도전 (error상태)
// function sideMenu() {
//   let button = localStorage.setItem("button", document.querySelector("i"));
//   let side_bar = localStorage.setItem("nav", document.querySelector("nav"));
//   button.classList.toggle("active");
//   side_bar.classList.toggle("active");
// }

// 상태 영속성 구현 도전 (error상태)
// function stateToggle() {
//   //   let state_button = btn.classList.toggle("active");
//   //   let state_nav = side_bar.classList.toggle("active");
//   if (localStorage.getItem("state")) {
//     state = JSON.parse(localStorage.getItem(button));
//   }
// }

// 상태 영속성 구현 도전 (error상태)
// const storageItem = JSON.parse(localStorage.getItem(sideMenu));
// function getStateItem(v) {
//   if (storageItem) {
//     return localStorage.getItem(v);
//   }
// }
