document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.getElementById("create-task-form")
  let ul = document.getElementById("tasks")
  let li = document.createElement("li")

  form.addEventListener("submit", function()
  {
    let new_task = document.getElementById("new-task-description")
    event.preventDefault()
    li.innerText = new_task.value
    ul.append(li)
    
    console.log(new_task.value)
  })

});
