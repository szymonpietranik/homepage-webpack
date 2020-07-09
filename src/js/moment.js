import "../scss/main.scss";

import moment from "moment";
console.log(moment().startOf("day").fromNow());

const startOfDay = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(startOfDay);

const date = document.querySelector(".dateHour-js");

date.innerHTML = startOfDay;
