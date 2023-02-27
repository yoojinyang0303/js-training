import AnalogClock from "./AnalogClock.js";
import SettingClock from "./SettingClock.js";

document.querySelectorAll(".analog-clock").forEach(AnalogClock);

setInterval(() => {
  SettingClock();
}, 1000);

SettingClock();
