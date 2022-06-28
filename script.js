const plus = document.querySelector(".plus");
const dad = document.querySelector(".main_side3");
const comDad = document.querySelector(".completed_task");
const newItem = document.querySelector('#new_item');
const comBtn = document.querySelector(".completed");
const toDo = document.querySelector(".todo");
const TestInput = document.querySelector(".main_side4");

deletebtn();
moveToCompleted();

 
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


function deletebtn(){     ///fnction to delete task
let bins = document.querySelectorAll(".bin");
for(let bin of bins){
    bin.addEventListener("click",()=>{
        bin.parentNode.remove();
    });

    }
}

function moveToCompleted(){     ///functions to move tasks to completed tab
let checkings = document.querySelectorAll("#checkbox");  ///get all checkbox in the list of tasks

for(let i = 0; i <checkings.length;i++){        //loop through the list of checkboxes 
        checkings[i].addEventListener("click",()=>{    /// add an eventlistner to each checkbox
        if(checkings[i].checked){        /// if checkbox is checked do that

            // then this adds the new divs to the parent element(dad) innerhtml
            comDad.innerHTML += `
                <div class="tasks">
                    <span>${checkings[i].value}</span>
                    <img class="bin" src="/icons/bin.png" alt="">
                </div>`;
            deletebtn(); ///this deletes tasks in the completed tasks tab
        
    }
});
}
};





plus.addEventListener('click',()=>{
let val = newItem.value; /// gets the value of your input

// then this adds the new divs to the parent element(dad) innerhtml
dad.innerHTML += `           
<div class="tasks">
    <span><input type="checkbox" name="Task3" id="checkbox" value="${val}">${val}</span>
    <img class="bin" src="/icons/bin.png" alt="">
</div>`;

document.querySelector('#new_item').value = ""  ; ///lets the input be empty
deletebtn();
moveToCompleted();
   
})