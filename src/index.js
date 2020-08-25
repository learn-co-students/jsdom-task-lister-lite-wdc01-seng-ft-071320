document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector("form#create-task-form")
  form.addEventListener("submit", function(e) {
    
    e.preventDefault()
    
    let ul = document.querySelector("ul")
    let li = document.createElement("li")
    let btn = document.createElement("button")
    li.innerText = document.querySelector("input#new-task-description").value
    
    btn.addEventListener("click", function(e) {
      li.remove()
    })
  
    li.append(btn)
    ul.append(li)
    
    e.target.reset()

  })

});
