import DatePicker from "./DatePicker.js";

const $containers = [...document.querySelectorAll(".date")];

$containers.forEach(($container) => {
  let datePicker = DatePicker();
  $container.appendChild(datePicker);
});

const isParentInClass = (element, className) => {
  if (
    element.classList.contains(className) ||
    element.classList.contains("calendarr")
  ) {
    return true;
  }
  if (element.parentElement) {
    return isParentInClass(element.parentElement, className);
  }
  return false;
};

window.addEventListener("click", (e) => {
  if (!isParentInClass(e.target, "date-picker")) {
    document.querySelectorAll(".calendar").forEach((element) => {
      if (!element.classList.contains("hidden")) {
        element.classList.add("hidden");
      }
    });
  }
});
