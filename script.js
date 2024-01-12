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

    // creating note element
    let note =  document.createElement("div");
    note.className="stickyNote";
    note.style.backgroundColor=backColor;
    WallCont.insertBefore(note,newNoteButton);

    //creating heading div
    let heading = document.createElement("div");
    heading.className="heading";

    //creating heading subnodes
    let taskTitle = document.createElement("input");
    taskTitle.type="text";
    taskTitle.placeholder="Enter the Title😄";
    heading.appendChild(taskTitle);

    let deleteButton = document.createElement("button");
    deleteButton.className= "delete";
    heading.appendChild(deleteButton);
    console.log(deleteButton);

    //appending heading as first child of new note
    note.appendChild(heading);

    
    //creating a description box
    let desc = document.createElement("textarea");
    desc.name="desc";
    desc.cols="30";
    desc.rows="10";
    desc.placeholder="Enter the description";
    desc.id="desc";
    note.appendChild(desc);
    
    // EVENT LISTENERS

    //title listeners
    taskTitle.addEventListener("keypress",function(event){

        if(event.key==="Enter" && taskTitle.value!==""){

            desc.focus();
        }
    },true);

    // delete listeners
    note.addEventListener("mouseenter",function(){
        deleteButton.style.display="block";
    })
    note.addEventListener("mouseleave",function(){
        deleteButton.style.display="none";
    })
    deleteButton.addEventListener("click",function(){
        WallCont.removeChild(note);
    })

    //textarea listeners
    desc.addEventListener("input",function(event){
        if(event.inputType === "deleteContentBackward" && desc.value===""){
            note.removeChild(desc)
            taskTitle.focus();
        }
    },true)
  
}

//newNotButton listeners
newNoteButton.addEventListener("click",addNote,true);