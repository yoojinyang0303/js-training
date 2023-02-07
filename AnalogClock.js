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
};

export default AnalogClock;
