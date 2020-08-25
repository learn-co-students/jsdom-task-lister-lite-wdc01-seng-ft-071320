document.addEventListener("DOMContentLoaded", () => {
  

  let form = document.querySelector("form#create-task-form")

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let newul = document.createElement("ul")
    let newli = document.createElement("li")
    

    newli.innerText = document.querySelector("input#new-task-description").value;
    //event.target[1].value
    
    console.log("ok")

    newul.append(newli)
    let list = document.querySelector('ul#tasks')
    list.append(newul)
    // document.getElementById("tasks").innerHTML += <code>preventDefault()</code>;
    
    // let div = document.querySelector("#tasks")
    // div.appendChild(content)


},false);


})
  

