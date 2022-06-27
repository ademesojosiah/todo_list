const plus = document.querySelector(".plus");
const dad = document.querySelector(".main_side3");
const comDad = document.querySelector(".completed_task");
const newItem = document.querySelector('#new_item');
const comBtn = document.querySelector(".completed");
const toDo = document.querySelector(".todo");
const TestInput = document.querySelector(".main_side4");
const checkings = document.querySelectorAll("#checkbox");



plus.addEventListener('click',()=>{
    let newTask = document.createElement("div")
    newTask.classList.add("tasks")
    let val = newItem.value
    newTask.innerHTML = `
    <span><input type="checkbox" name="Task3" id="checkbox" value="${val}">${val}</span>
    <img class="bin" src="/icons/bin.png" alt="">`;
    dad.append(newTask);
    document.querySelector('#new_item').value = ""  ;

    moveToCompleted();
    deletebtn();
   
})




moveToCompleted();
deletebtn();



toDo.addEventListener('click',()=>{
    dad.style.display = "block"
    comDad.style.display ="none"
    TestInput.style.display ="flex"
})

comBtn.addEventListener('click',()=>{
    dad.style.display = "none";
    comDad.style.display ="block";
    TestInput.style.display ="none"

   

})


function deletebtn(){
let bins = document.querySelectorAll(".bin");
for(let bin of bins){
    bin.addEventListener("click",()=>{
        bin.parentNode.remove();
    });

    }

    
}

function moveToCompleted(){
const checkings = document.querySelectorAll("#checkbox");
for(let i = 0; i<checkings.length; i++){  //looping through the checkings array
    checkings[i].addEventListener("click",()=>{    //add evenlistener to each of them
        if(checkings[i].checked == true){  // check if each of the them are checked 
            let checkers = document.createElement("div");
            checkers.classList.add("tasks");
            checkers.innerHTML = `
            <span>${checkings[i].value}</span>
            <img class="bin" src="/icons/bin.png" alt="">`;
            comDad.append(checkers);

            deletebtn();
    }
});
    
}
};
   