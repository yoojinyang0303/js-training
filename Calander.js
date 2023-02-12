const Calander = (nowDate) => {
  let nowYear = nowDate.getFullYear();
  let nowMonthIdx = nowDate.getMonth();

  let months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthsList = months[nowMonthIdx];

  // 현재 달 정보
  const nowLastDay = new Date(nowYear, nowMonthIdx + 1, 0).getDay();
  const nowLastDate = new Date(nowYear, nowMonthIdx + 1, 0).getDate();

  // 직전 달 정보
  const preLastDay = new Date(nowYear, nowMonthIdx, 1).getDay();
  const preLastDate = new Date(nowYear, nowMonthIdx, 0).getDate();

  const clickDayHandler = (dayElement) => {
    dayElement.addEventListener("click", (e) => {
      e.target.parentElement
        .querySelectorAll(".click-date")
        .forEach((element) => {
          element.classList.remove("click-date");
        });

      const inputElement = element.parentElement.querySelectorAll("input");
      inputElement.value = e.target.dataset.date;
      dayElement.classList.add("click-date");
      element.classList.add("hidden");
    });
  };

  const beforeDays = [];
  for (let i = preLastDate - preLastDay + 1; i <= preLastDate; i++) {
    let dayElement = document.createElement("div");
    dayElement.className = "previous-day";
    dayElement.innerHTML = String(i);
    beforeDays.push(dayElement);

    const month = String(nowDate.getMonth()).padStart(2, "0");
    const day = String(i).padStart(2, "0");
    dayElement.dataset.date = `${nowDate.getFullYear()} - ${month} - ${day}`;

    clickDayHandler(dayElement);
  }

  const currentDate = new Date();

  const currentDays = [];
  for (let i = 1; i <= nowLastDate; i++) {
    let addClass = "";
    if (
      nowDate.getFullYear() === currentDate.getFullYear() &&
      nowDate.getMonth() === currentDate.getMonth() &&
      nowDate.getDate() === i
    ) {
      addClass = "today";
    }

    let dayElement = document.createElement("div");
    dayElement.className = `day ${addClass}`;
    const month = String(nowDate.getMonth() + 1).padStart(2, "0");
    const day = String(i).padStart(2, "0");
    dayElement.dataset.date = `${nowDate.getFullYear()} - ${month} - ${day}`;

    clickDayHandler(dayElement);

    currentDays.push(dayElement);
  }

  const nextDays = [];
  for (let i; i < (7 - nowLastDay - 1 === 7 ? 0 : 7 - nowLastDay); i++) {
    let dayElement = document.createElement("div");
    dayElement.className = "next-day";
    dayElement.innerHTML = String(i);
    nextDays.push(dayElement);

    const month = String(nowDate.getMonth() + 2).padStart(2, "0");
    const day = String(i).padStart(2, "0");
    dayElement.dataset.date = `${nowDate.getFullYear()} - ${month} - ${day}`;

    clickDayHandler(dayElement);
  }

  let element = document.createElement("div");
  element.className = "calendar hidden";

  const calendarNavElement = document.createElement("div");
  calendarNavElement.className = "canlendar-nav";

  const navElementLeft = document.createElement("div");
  navElementLeft.className = "triangle-left";
  navElementLeft.addEventListener("click", function () {
    const calendar = Calendar(
      new Date(nowDate.setMonth(nowDate.getMonth() - 1))
    );
    calendar.classList.remove("hidden");
    element.replaceWith(calendar);
  });

  calendarNavElement.appendChild(navElementLeft);

  calendarNavElement.insertAdjacentHTML(
    "beforeend",
    `
    <div class="view-month-year">
        <div class="month">${monthsList}</div>
        <div class="year">${nowYear}</div>
    </div>
    `
  );

  const navElementRight = document.createElement("div");
  navElementRight.className = "triangle-right";
  navElementRight.addEventListener("click", function () {
    const calendar = Calendar(
      new Date(nowDate.setMonth(nowDate.getMonth() + 1))
    );
    calendar.classList.remove("hidden");
    element.replaceWith(calendar);
  });

  calendarNavElement.appendChild(navElementRight);
  element.appendChild(calendarNavElement);

  let calendarGrid = document.createElement("div");
  calendarGrid.className = "calendar-grid";

  calendarGrid.insertAdjacentHTML(
    "beforeend",
    `
    <div class="week">SUN</div>
    <div class="week">MON</div>
    <div class="week">TUE</div>
    <div class="week">WED</div>
    <div class="week">THU</div>
    <div class="week">FRI</div>
    <div class="week">SAT</div>
`
  );

  element.appendChild(calendarGrid);

  beforeDays.map((day) => {
    calendarGrid.appendChild(day);
  });
  currentDays.map((day) => {
    calendarGrid.appendChild(day);
  });
  nextDays.map((day) => {
    calendarGrid.appendChild(day);
  });

  return element;
};

export default Calendar;
