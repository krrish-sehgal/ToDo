let newNoteButton= document.getElementById("newNote");
let WallCont = document.querySelector("#WallCont");

var colors = [
    'rgb(200, 255, 250)',
    'rgb(255, 200, 215)',
    'rgb(230, 210, 255)',
    'rgb(255, 255, 180)',
    'rgb(255, 235, 240)',
    'rgb(255, 250, 230)'];

function getRandomColor() {
  var randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
function addNote(){
    
    let backColor = getRandomColor();
    
    let note =  document.createElement("div");
    note.className="stickyNote";
    note.style.backgroundColor=backColor;
    WallCont.insertBefore(note,newNoteButton);

    let taskTitle = document.createElement("input");
    taskTitle.type="text";
    taskTitle.placeholder="Enter the Title😄";
    note.appendChild(taskTitle);
    

    let desc = document.createElement("textarea");
    desc.name="desc";
    desc.cols="30";
    desc.rows="10";
    desc.placeholder="Enter the description";
    desc.id="desc";
    
    taskTitle.addEventListener("keypress",function(event){
        
        if(event.key==="Enter" && taskTitle.value!==""){

        
            note.appendChild(desc);
            desc.focus();
        }
    },true);

    desc.addEventListener("input",function(event){
        if(event.inputType === "deleteContentBackward" && desc.value===""){
            note.removeChild(desc)
            taskTitle.focus();
        }
    },true)
  
}

newNoteButton.addEventListener("click",addNote,true);