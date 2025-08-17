var imgFeature = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.list-image div img');
var preBtn = document.querySelector('.pre');
var nextBtn = document.querySelector('.next');
console.log(listImg)

// listImg.forEach(imgElement=>{
//     imgElement.addEventListener('click',e=>{
//         imgFeature.scr= e.target.getAttribute('src');
//     })
// })

var currentIndex = 0;

function updateImage(index){

    document.querySelectorAll('.list-image div').forEach(item=>{
        item.classList.remove('active')
    })

    currentIndex=index;
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active');
}

listImg.forEach((imgElement,index) => {
    imgElement.addEventListener('click', e => {
        imgFeature.style.opacity ='0'
        setTimeout(()=>{
            updateImage(index);
            imgFeature.style.opacity ='1';
        },400)
    });
});

preBtn.addEventListener('click',e=>{
   if(currentIndex===0){
    currentIndex=listImg.length -1
   }else{
    currentIndex--
   }
   updateImage(currentIndex);
})

nextBtn.addEventListener('click',e=>{
    if(currentIndex===listImg.length -1){
     currentIndex=0;
    }else{
     currentIndex++
    }
    updateImage(currentIndex);
 })