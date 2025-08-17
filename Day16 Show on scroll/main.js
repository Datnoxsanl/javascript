// var animationElement = document.querySelectorAll(".show");

// function isElInWindown(element) {
//   var rect = element.getClientRects();
//   var heightScreen = window.innerHeight;

//   if (!(rect.bottom < 0 || rect.top > heightScreen)) {
//     element.classList.add("start");
//   } else {
//     element.classList.remove("start");
//   }
// }

// function checkAnimation() {
//   animationElement.forEach((el) => {
//     isElInWindown(el);
//   });
// }

// window.onscroll = checkAnimation();

var animationElement = document.querySelectorAll(".Show");

function isElInWindown(element) {
    var rect = element.getBoundingClientRect();
    var heightScreen = window.innerHeight || document.documentElement.clientHeight;

    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        element.classList.add("start");
    } else {
        element.classList.remove("start");
    }
}

function checkAnimation() {
    var animationElementArray = Array.from(animationElement); // Chuyển NodeList thành mảng
    animationElementArray.forEach((el) => {
        isElInWindown(el);
    });
}

window.onscroll = checkAnimation; // Gán hàm xử lý sự kiện cho sự kiện cuộn

