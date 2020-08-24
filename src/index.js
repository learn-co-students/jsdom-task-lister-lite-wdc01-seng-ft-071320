document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  document.querySelector("#submit-button").addEventListener("click", function(event){
    event.preventDefault();
    let userInput = document.querySelector('input#new-task-description').value;
    document.getElementById("tasks").innerHTML += `<li>${userInput}</li>`;
    
  }, 
  )
});
