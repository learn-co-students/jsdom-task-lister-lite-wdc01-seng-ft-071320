document.addEventListener("DOMContentLoaded", () => {
  let count = 1
  
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let userInput = document.getElementById('new-task-description'); 
    let li = document.createElement('li');
    li.id = `${count}`
    li.innerHTML = `${userInput.value} <span> <button type="button" data-num="${count}">X</button></span>`
    document.getElementById("tasks").append(li);
    event.target.reset();
    count++;

  });

  let list = document.querySelector("#tasks")
  list.addEventListener("click", function() {
    let num = event.target.dataset.num;
    let li = document.getElementById(`${num}`).remove()
  })
  
  
  
  

});
