import Calendar from "./Calendar.js";

const DatePicker = () => {
  let element = document.createElement("div");
  element.className = "date-picker";

  element.insertAdjacentHTML(
    "beforeend",
    `
        <h1 class="date-picker-title">Date Picker</h1>
    `
  );

  let inputElement = document.createElement("input");
  inputElement.className = "date-picker-input";
  inputElement.type = "text";
  inputElement.placeholder = "Select date";
  inputElement.readOnly = true;

  element.appendChild(inputElement);

  const calendarElement = Calendar(new Date());
  element.appendChild(calendarElement);

  inputElement.addEventListener("click", function () {
    const calendarElement = element.querySelector(".calendar");

    // calendarElement.classList.toggle("hidden");
    if (calendarElement.classList.contains("hidden")) {
      calendarElement.classList.remove("hidden");
    } else {
      calendarElement.classList.add("hidden");
    }
  });
  return element;
};

export default DatePicker;
