// 숫자 위치 설정
function setTimePosition() {
  const time = document.querySelector(".time");
  for (let i = 0; i < time.length; i++) {
    if (i + 1 === 3 || i + 1 === 6 || i + 1 === 9 || i + 1 === 12) continue;
    const angle = (i + 1) * (Math.PI / 6);
    const x =
      132 -
      time[i].offsetWidth / 2 +
      132 * Math.abs(Math.sin(angle).toFixed(2));
    const y = 132 - 132 * Math.abs(Math.cos(angle).toFixed(2));
    if (i + 1 > 6) time[i].style.right = `${x}px`;
    else time[i].style.left = `${x}px`;

    if ((i + 1 >= 9 && i + 1 <= 12) || (i + 1 >= 1 && i + 1 <= 3))
      time[i].style.top = `${y}px`;
    else time[i].style.bottom = `${y}px`;
  }
}

// 시계 구성
function clock() {
  const secondPointer = document.querySelector(".second");
  const minutePointer = document.querySelector(".minute");
  const hourPointer = document.querySelector(".hour");

  const currentTime = new Date();

  let second = currentTime.getSeconds();
  let secondAngle = second * 6;
  let secondAngleVal = `rotate(${secondAngle}deg)`;

  let minute = currentTime.getMinutes();
  let minuteAngle = minute * 6;
  let minuteAngleVal = `rotate(${minuteAngle}deg)`;

  let hour = currentTime.getHours();
  let hourAngle =
    (hour > 12 ? (hour - 12) * 30 : hour * 30) + (minute / 60) * 30;
  let hourAngleVal = `rotate(${hourAngle})`;

  secondPointer.style.transform = secondAngleVal;
  minutePointer.style.transform = minuteAngleVal;
  hourPointer.style.transform = hourAngleVal;
}

// 시계 작동
function handleLoad() {
  setInterval(clock, 0);
}

// 시계 함수들 실행
function init() {
  setTimePosition();
  window.addEventListener("load", handleLoad);
}

const AnalogClock = ($container) => {
  // 시침.분침.초침 생성
  $container.innerHTML += '<div class="hand hour"></div>';
  $container.innerHTML += '<div class="hand minute"></div>';
  $container.innerHTML += '<div class="hand second"></div>';
  $container.innerHTML += '<div class="time time1">|</div>';
  $container.innerHTML += '<div class="time time2">|</div>';
  $container.innerHTML += '<div class="time time3">|</div>';
  $container.innerHTML += '<div class="time time4">|</div>';
  $container.innerHTML += '<div class="time time5">|</div>';
  $container.innerHTML += '<div class="time time6">|</div>';
  $container.innerHTML += '<div class="time time7">|</div>';
  $container.innerHTML += '<div class="time time8">|</div>';
  $container.innerHTML += '<div class="time time9">|</div>';
  $container.innerHTML += '<div class="time time10">|</div>';
  $container.innerHTML += '<div class="time time11">|</div>';
  $container.innerHTML += '<div class="time time12">|</div>';

  init();
};

export default AnalogClock;
