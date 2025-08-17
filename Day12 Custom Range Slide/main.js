const body = document.querySelector('body');
const prosess = document.querySelector('.process');
const range = document.querySelector('.range');


function setProcess(percent){
    prosess.style.width=`${percent}%`;
    prosess.querySelector('span').innerText=`${percent}%`;
    body.style.backgroundColor=`rgba(0,0,0,${percent/100})`
}

setProcess(40);

range.addEventListener('mousemove',function (e){
     const Position = e.pageX -this.offsetLeft
     let percent = (Position/this.offsetWidth)*100

     percent = Math.ceil(percent)
     setProcess(percent);
})