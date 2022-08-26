const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

/////////////////////////
// CACHED ELEMENTS / ELEMENTS REFRENCES
/////////////////////////
const $meal=$('#meal')
const $cat = $('#cat')
const $source = $("#source")
const $form = $("form")
const $input = $('input[type="text"]')



/////////////////////////
// EVENT LISTENERS
/////////////////////////
$form.on( 'submit', handleGetData )

/////////////////////////
// FUNCTIONS
/////////////////////////
function handleGetData (event)
{
    event.preventDefault()
    console.log("function works");
    userInput = $input.val()
   // if ( userInput === '' ) return

    $.ajax(URL).then(
      function (data) {
        console.log("recipe is ready!");
        
        $meal.text(data.meals[0].strMeal)
        $cat.text(data.meals[0].strCategory)
        $img.text(data.meals[0].strMealThumb)
        $source.text(data.meals[0].strSource)
        console.log(data)
            
            $( 'main' ).append()
            
           
      },
      function (error) {
          console.log( "we broke it!" )
          console.log(error);
      }
    );
}