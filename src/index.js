document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let userInput = document.getElementById('new-task-description').value; 
    let li = document.createElement('li');
    li.innerText = `${userInput}`;
    document.getElementById("tasks").append(li)
  });
  
  
  

});
