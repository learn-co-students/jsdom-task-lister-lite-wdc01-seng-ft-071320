document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let userInput = document.getElementById('new-task-description'); 
    let li = document.createElement('li');
    li.innerText = `${userInput.value}`;
    document.getElementById("tasks").append(li);
  });
  
  
  

});
