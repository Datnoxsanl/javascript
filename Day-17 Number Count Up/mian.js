var fb = document.querySelector(".Facebook h2");
var tt = document.querySelector(".Tiktok h2");
var yt = document.querySelector(".Youtube h2");

function count(el, to) {
  var count = 0;
  let speed = 500;
  let step = to / speed;
  var counting = setInterval(() => {
    count += step;
    if (count > to) {
      clearInterval(counting);
      el.innerText = to;
    } else {
      el.innerText = Math.ceil(count);
    }
  }, 1);
}

count(fb, 3300);
count(tt, 1000);
count(yt, 9900);
