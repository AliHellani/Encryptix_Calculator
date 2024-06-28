function c(val) {
  document.getElementById("calculator").value = val;
}

function del() {
  var ev = document.getElementById("calculator");
  ev.value = ev.value.slice(0, -1);
}

function v(val) {
  document.getElementById("calculator").value += val;
}

function Solve(val) {
  var v = document.getElementById("calculator");
  v.value += val;
}

function coss(el) {
  var c = document.getElementById("calculator");
  var v = Math.cos(c.value);
  c.value = v;
}
function sinn(el) {
  var c = document.getElementById(el);
  var v = Math.sin(c.value);
  c.value = v;
}
function tann(el) {
  var c = document.getElementById(el);
  var v = Math.tan(c.value);
  c.value = v;
}

function e() {
  try {
    c(eval(document.getElementById("calculator").value));
  } catch (e) {
    c("Error");
  }
}
