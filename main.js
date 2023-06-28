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
//Math Methods//
document.querySelector(".head3").innerHTML = "Math Methods";
const a = Math.round(9.2);
console.log(a);
document.querySelector(".math").innerHTML = a;
const b = Math.round(-9.8);
console.log(b);
document.querySelector(".math1").innerHTML = b;

const c = Math.ceil(6.6);
console.log(c);
document.querySelector(".math2").innerHTML = c;
const e = Math.ceil(-5.3);
console.log(e);
document.querySelector(".math3").innerHTML = e;

const f = Math.floor(6.6);
console.log(f);
document.querySelector(".math4").innerHTML = f;
const g = Math.floor(-5.3);
console.log(g);
document.querySelector(".math5").innerHTML = g;

const h = Math.random();
console.log(h);
document.querySelector(".math6").innerHTML = h;
const i = Math.random(5);
console.log(i);
document.querySelector(".math7").innerHTML = i;

const j = Math.sqrt(625);
console.log(j);
document.querySelector(".math8").innerHTML = j;
const k = Math.sqrt(169);
console.log(k);
document.querySelector(".math9").innerHTML = k;

const l = Math.pow(9,3);
console.log(l);
document.querySelector(".math10").innerHTML = l;
const m = Math.pow(3,5);
console.log(m);
document.querySelector(".math11").innerHTML = m;

const n = Math.abs(6.6);
console.log(n);
document.querySelector(".math12").innerHTML = n;
const o = Math.abs(-5.3);
console.log(o);
document.querySelector(".math13").innerHTML = o;

