 fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    var prodcuts = document.querySelector(".products");
    prodcuts.innerHTML = "";

    data.forEach((item) => {
      var newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
   <img src="${item.image}" alt="">
   <div class="info">
       <div class="name">${item.title}</div>
       <div class="price">${item.price}</div>
   </div>
   `;
      prodcuts.appendChild(newProduct);
    });
  });

  var search = document.querySelector('.search input')
 search.addEventListener('input',function(e){
    let txtSeach= e.target.value.trim();
    let listProduct = document.querySelectorAll('.product');
    listProduct.forEach(item =>{
       if( item.innerText.includes(txtSeach)){
         item.classList.remove('hide');
       }
       else{
        item.classList.add('hide')
       }
    })
 })



  