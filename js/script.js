const btn = document.querySelector("button")

btn.addEventListener("click", function(evt) {
   const li = document.createElement("li")
   const inp = document.querySelector("input")
  
   li.textContent = inp.value
   // new code below
   document.querySelector('ul').appendChild(li);
   
   inp.value = ''
})

document.querySelector("ul").addEventListener("click", handleClick)

function handleClick(evt) {
  console.log(evt);
}