var images = document.querySelectorAll('.image');
var pre = document.querySelector('.left');
var next = document.querySelector('.right');
var closeX =  document.querySelector('.close');
var galleryImg = document.querySelector('.inner');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

function ShowGallery(){
    if(currentIndex == 0 ){
        pre.classList.add('hide')
    }else{
        pre.classList.remove('hide')
    }
    if(currentIndex == images.length - 1 ){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }
    galleryImg.src = images[currentIndex].src;
        gallery.classList.add('show');
}

images.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex = index ;
        ShowGallery();
    })
})

closeX.addEventListener('click',function(){
    gallery.classList.remove('show');
})

document.addEventListener('keydown',function(e){
    if(e.keyCode ==27){
        gallery.classList.remove('show');
    }
})

pre.addEventListener('click',function(){
    if(currentIndex > 0 ){
        currentIndex--;
        ShowGallery()
    }
})

pre.addEventListener('click',function(){
    if(currentIndex > 0 ){
        currentIndex--;
        ShowGallery()
    }
})

pre.addEventListener('click',function(){
    if(currentIndex > images.length - 1 ){
        currentIndex++;
        ShowGallery()
    }
})
