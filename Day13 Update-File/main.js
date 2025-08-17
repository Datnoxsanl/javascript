var upload = document.querySelector('#mypicture');

var preview  = document.querySelector('.preview')

var error = document.querySelector('.error')

upload.addEventListener('change',function(e){


    var file = upload.files[0];
    if(!file){
        return 
    }
    if(file.name.endsWith('.jpg')){
        error.innerHTML=`Hinhf anh khong dung dinhj dang`
        return
    }else{
        error.innerHTML=``
    }
    
    if(file.size/(1024*1024)>5){
    error.innerHTML=`hinh anh qua 5mb`
    }

    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);



        //cách 2 dùng base 64
    // var fileReader = new FileReader();
    // fileReader.readAsDataURL(file)
    // fileReader.onloadend= function (e){

    //  img.src= e.target.result;
    // }

    preview.appendChild(img);
})