const q = console.log;

const aspectRatio1 =
  document.querySelectorAll("img")[0].getBoundingClientRect().width /
  document.querySelectorAll("img")[0].getBoundingClientRect().height;

const aspectRatio2 =
  document.querySelectorAll("img")[1].getBoundingClientRect().width /
  document.querySelectorAll("img")[1].getBoundingClientRect().height;

let aspectRatio = aspectRatio1;

q(aspectRatio1);
q(aspectRatio2);

document.querySelectorAll("img")[0].style = "display: none;";
document.querySelectorAll("img")[1].style = "display: none;";

let mediaQueryCondition = window.matchMedia(
  `(min-aspect-ratio: ${aspectRatio})`
);

const setBg = () => {
  if (mediaQueryCondition.matches) {
    document.getElementById("centerImg").style = "background-size: 100vw auto;";
  } else {
    document.getElementById("centerImg").style = "background-size: auto 100vh;";
  }
};
setBg();
mediaQueryCondition.addEventListener("change", () => {
  q("mediaCondition changed!", aspectRatio);
  setBg();
});

const dayArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Ocb",
  "Nov",
  "Dec",
];
const setTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const day = date.getDay();
  const month = date.getMonth();
  const dateNum = date.getDate();
  let AmPm;
  if (hour >= 12) {
    AmPm = "PM";
  } else {
    AmPm = "AM";
  }

  if (minute < 10) {
    document.getElementsByClassName(
      "time"
    )[0].innerHTML = `${hour}:0${minute} ${AmPm}`;
  } else {
    document.getElementsByClassName(
      "time"
    )[0].innerHTML = `${hour}:${minute} ${AmPm}`;
  }

  document.getElementsByClassName("dateText")[0].innerHTML = `${
    dayArray[day - 1]
  }, ${monthArray[month]}
            `;

  document.getElementsByClassName("second")[0].style = `rotate: ${
    second * 6
  }deg;`;

  document.getElementsByClassName("minute")[0].style = `rotate: ${
    minute * 6
  }deg;`;

  document.getElementsByClassName("hour")[0].style = `rotate: ${hour * 30}deg;`;

  // q(dayArray[day - 1]);
  // q(dateNum);
  // q(monthArray[month]);
};

setTime();
setInterval(setTime, 1000);

const dark = () => {
  mediaQueryCondition = window.matchMedia(
    `(min-aspect-ratio: ${aspectRatio2})`
  );
  document
    .getElementsByClassName("centerImg")[0]
    .classList.add("centerImgDark");

  document
    .getElementsByClassName("centerImg")[1]
    .classList.add("centerImgDark");

  document.getElementsByClassName("Btn")[0].style = `display: none;`;

  document.getElementsByClassName("Btn")[1].style = ``;

  document.getElementsByClassName("hour")[0].classList.add("colorWhite");

  document.getElementsByClassName("minute")[0].classList.add("colorWhite");

  document.getElementsByClassName("dot")[0].classList.add("colorWhite");

  document.getElementsByClassName("time")[0].style = `color: white;`;

  document.getElementsByClassName("date")[0].style = `color: white;`;

  document.getElementsByClassName("dateNum")[0].classList.add("colorBlack");

  setBg();
};

const light = () => {
  mediaQueryCondition = window.matchMedia(
    `(min-aspect-ratio: ${aspectRatio1})`
  );

  document
    .getElementsByClassName("centerImg")[0]
    .classList.remove("centerImgDark");

  document
    .getElementsByClassName("centerImg")[1]
    .classList.remove("centerImgDark");

  document.getElementsByClassName("Btn")[0].style = ``;

  document.getElementsByClassName("Btn")[1].style = `display: none;`;

  document.getElementsByClassName("hour")[0].classList.remove("colorWhite");

  document.getElementsByClassName("minute")[0].classList.remove("colorWhite");

  document.getElementsByClassName("dot")[0].classList.remove("colorWhite");

  document.getElementsByClassName("time")[0].style = ``;

  document.getElementsByClassName("date")[0].style = ``;

  document.getElementsByClassName("dateNum")[0].classList.remove("colorBlack");

  setBg();
};
