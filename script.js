const plus = document.querySelector(".plus");
const dad = document.querySelector(".main_side3");

deletebtn();

plus.addEventListener('click',()=>{
    let newTask = document.createElement("div")
    newTask.innerHTML = ` <div class="tasks">
    <span><input type="checkbox" name="Task3" id="">${document.querySelector('#new_item').value}</span>
    <img class="bin" src="/icons/bin.png" alt=""></div>`;
    dad.append(newTask);
    document.querySelector('#new_item').value = ""  ;
    
    deletebtn();

})




function deletebtn(){
let bins = document.querySelectorAll(".bin");
for(let bin of bins){
    bin.addEventListener("click",()=>{
        bin.parentNode.remove();
    });

    }
}
   