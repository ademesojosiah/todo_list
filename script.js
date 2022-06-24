const plus = document.querySelector(".plus");
const dad = document.querySelector(".main_side3");

deletebtn();

plus.addEventListener('click',()=>{
    let newTask = document.createElement("div")
    newTask.classList.add("tasks")
    newTask.innerHTML = `
    <span><input type="checkbox" name="Task3" id="">${document.querySelector('#new_item').value}</span>
    <img class="bin" src="/icons/bin.png" alt="">`;
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
   