const notesConatiner = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes(){
    notesConatiner.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesConatiner.innerHTML);
}


createBtn.addEventListener('click',()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className='input-box';
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesConatiner.appendChild(inputBox).appendChild(img);
})

notesConatiner.addEventListener('click',function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})