var input = document.querySelector("input");
var button = document.querySelector("button");
var form = document.querySelector("form");
var todos = document.querySelector(".todos");


form.addEventListener("submit", function(event){
  event.preventDefault();
  let val = input.value.trim();
  if (val) {
    // AddTodoElement({
    //     text: val,
    //     status: 'completed'
    // });
    AddTodoElement({
        text:val
    });

    SavetodosList();
  }

  input.value=''
});

function AddTodoElement(todo) {

  var li = document.createElement('li');
      li.innerHTML = ` 
                  <span>${todo.text}</span>
                  <i class="fa-solid fa-trash"></i>
                `;
    if(todo.status==='completed'){
        li.classList.add('completed');
    }
  
    li.addEventListener('click',function(){
        this.classList.toggle('completed')
        // this.classList.toggle('completed');
        SavetodosList();
    });

    li.querySelector('i').addEventListener('click',function(){
        this.parentElement.remove();
        SavetodosList();
    })
  todos.appendChild(li);
}

function SavetodosList(){
    let todolist = document.querySelectorAll('li');
    let todoListStorage = [];
     todolist.forEach((item)=>{
      let text =  item.querySelector('span').innerText;
      let status=  item.getAttribute('class');

      todoListStorage.push({
        text,
        status
      })
    })
    localStorage.setItem('todolist',JSON.stringify(todoListStorage));
    // console.log(JSON.parse(localStorage.getItem('todoList')));
}

function init(){
    let data = JSON.parse(localStorage.getItem('todolist'))
    data.forEach(function(item){
        console.log(item);
        AddTodoElement(item);
    })
}

init();