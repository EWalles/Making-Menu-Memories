//ajax puppy tax
var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");
//listen for clicks on button
btn.addEventListener("click", function(){
  //make API request when button is clicked
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4){
      if(XHR.status == 200){
        var url = JSON.parse(XHR.responseText).message;
        img.src = url;
      } else{
        console.log("Error!!!");
      }
    }
  }
  XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
  XHR.send(); 
});



