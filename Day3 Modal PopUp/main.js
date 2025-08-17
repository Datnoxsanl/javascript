const modalBtn = document.querySelector('.Modal-btn');
const modal = document.querySelector('.Modal')
const modalContainer = document.querySelector('.Modal_container')
const modalCloses = document.querySelectorAll('.js-modal-close')

function showModal(){
    modal.classList.add('open');
}

function hideModal(){
    modal.classList.remove('open');
}

for(const btn of modalCloses){
    btn.addEventListener('click',hideModal);
}

modalBtn.addEventListener('click',showModal);
modal.addEventListener('click',hideModal);

modalContainer.addEventListener('click',function(event){
    event.stopPropagation();
})
