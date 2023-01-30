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

function sideMenu() {
  let btn = document.querySelector("i");
  let side_bar = document.querySelector("nav");
  btn.classList.toggle("active");
  side_bar.classList.toggle("active");
}
