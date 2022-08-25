const URL = "https://dog.ceo/api/breeds/image/random";

console.log(URL);
function btn ()
    {
        $.ajax(URL).then(
        function (dog)
    
        {console.log(dog.message)
        $('h1').append("URL")}
)}
//append to main page. 