var content = document.querySelector(".content");
var input = document.querySelector(".content input");

var tags = ["java", "php"];

function renderTags() {
  content.innerHTML = ' ';
  for (let i = 0; i < tags.length; ++i) {
    const tag = tags[i];
    content.innerHTML += `
      <li>${tag}
      <i class="fa-solid fa-x" onclick="removeTag(${i})"></i>
      </li>
      `;
  }
  content.appendChild(input);
  input.focus();
}

renderTags();

input.addEventListener("keydown", (e) => {
  if ((e.key === "Enter")) {
    tags.push(input.value.trim());
    input.value=''
    renderTags()
  }
});

function removeTag(index){
    tags.splice(index,1);
    renderTags()
}

var btnRemove = document.querySelector('.Remove-all')


btnRemove.addEventListener('click',()=>{
    tags = [];
    renderTags()
})

































// const content = document.querySelector('.content');
// const input = document.querySelector('.content input');
// var tags = ['NodeJS', 'ReactJS'];

// function createTags() {
//     var tagsLength = tags.length;
//     var newContent = '';

//     for (let i = 0; i < tagsLength; i++) {
//         const tag = tags[i];

//         newContent += `<li>
//                          ${tag}
//                          <i class="fa-solid fa-x"></i>
//                        </li>`;
//     }

//     content.innerHTML = newContent;
//     content.appendChild(input);
//     input.focus();
// }

// createTags();
