// // 숫자 위치 설정
// function setTimePosition() {
//   const time = document.querySelector(".time");
//   for (let i = 0; i < time.length; i++) {
//     if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;
//     const angle = (i + 1) * (Math.PI / 6);
//     const x =
//       132 -
//       time[i].offsetWidth / 2 +
//       132 * Math.abs(Math.sin(angle).toFixed(2));
//     const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));
//     if (i + 1 > 6) time[i].style.right = `${x}px`;
//     else time[i].style.left = `${x}px`;

//     if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
//       time[i].style.top = `${y}px`;
//     else time[i].style.bottom = `${y}px`;
//   }
// }

// // 시계 구성
// function clock() {
//   const secondPointer = document.querySelector(".second");
//   const minutePointer = document.querySelector(".minute");
//   const hourPointer = document.querySelector(".hour");

//   const currentTime = new Date();

//   let second = currentTime.getSeconds();
//   let secondAngle = second * 6;
//   let secondAngleVal = `rotate(${secondAngle}deg)`;

//   let minute = currentTime.getMinutes();
//   let minuteAngle = minute * 6;
//   let minuteAngleVal = `rotate(${minuteAngle}deg)`;

//   let hour = currentTime.getHours();
//   let hourAngle =
//     (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
//   let hourAngleVal = `rotate(${hourAngle})`;

//   secondPointer.style.transform = secondAngleVal;
//   minutePointer.style.transform = minuteAngleVal;
//   hourPointer.style.transform = hourAngleVal;
// }

// // 시계 작동
// function handleLoad() {
//   setInterval(clock, 0);
// }

// // 시계 함수들 실행
// function init() {
//   setTimePosition();
//   window.addEventListener("load", handleLoad);
// }

const SettingClock = () => {
  let currentTime = new Date();
  let currentHours = currentTime.getHours() * 30;
  let currentMinutes = currentTime.getMinutes() * 6;
  let currentSeconds = currentTime.getSeconds() * 6;

  document.querySelectorAll(".hour").forEach(function (container) {
    container.style.cssText = `--deg: ${currentHours}`;
  });

  document.querySelectorAll(".minute").forEach(function (container) {
    container.style.cssText = `--deg: ${currentMinutes}`;
  });

  document.querySelectorAll(".second").forEach(function (container) {
    container.style.cssText = `--deg: ${currentSeconds}`;
  });
};

export default SettingClock;
