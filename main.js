//get methods//
document.querySelector(".head").innerHTML = "Get Methods";
const date = new Date();
console.log(date);
document.querySelector(".dt").innerHTML = date;
//previous dates
document.querySelector(".head1").innerHTML = "Previous Dates";
console.log(new Date("2021-06-05"));
document.querySelector(".dt1").innerHTML = new Date("2021-06-05");
console.log(new Date(2012, 6, 21, 11, 25, 30, 0));
document.querySelector(".dt2").innerHTML = new Date(2012, 6, 21, 11, 25, 30, 0);
console.log(new Date("2014"));
document.querySelector(".dt3").innerHTML = new Date("2014");
console.log(new Date(2010));
document.querySelector(".dt4").innerHTML = new Date(2010);
const d = new Date();
const month = ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"];
const year = month[d.getMonth()];
console.log(year);
document.querySelector(".day").innerHTML = year;
const day = d.getHours();
console.log(day);
document.querySelector(".day1").innerHTML = day;
const days = d.getMinutes();
console.log(days);
document.querySelector(".day2").innerHTML = days;
const x = d.getSeconds();
console.log(x);
document.querySelector(".day3").innerHTML = x;
const y = d.getMilliseconds();
console.log(y);
document.querySelector(".day4").innerHTML = y;
const z = d.getDay();
console.log(z);
document.querySelector(".day5").innerHTML = z;
const p = d.getDate();
console.log(p);
document.querySelector(".day6").innerHTML = p;
const q = d.getFullYear();
console.log(q);
document.querySelector(".day7").innerHTML = q;
//set method//
document.querySelector(".head2").innerHTML = "Set Methods";
const da = new Date();
const setYear = da.setFullYear(2021);
console.log(da);
document.querySelector(".set").innerHTML = da;
const setyear = da.setMonth(8);
console.log(da);
document.querySelector(".set1").innerHTML = da;
const Setyear = da.setDate(25);
console.log(da);
document.querySelector(".set2").innerHTML = da;
const setyears = da.setDate(2);
console.log(da);
document.querySelector(".set3").innerHTML = da;
const Setyears = da.setHours(4);
console.log(da);
document.querySelector(".set4").innerHTML = da;
const setYears = da.setMinutes(52);
console.log(da);
document.querySelector(".set5").innerHTML = da;
const SetYears = da.setSeconds(24);
console.log(da);
document.querySelector(".set6").innerHTML = da;
const setYearS = da.setMilliseconds(200);
console.log(da);
document.querySelector(".set7").innerHTML = da;