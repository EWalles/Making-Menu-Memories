const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

/////////////////////////
// CACHED ELEMENTS / ELEMENTS REFRENCES
/////////////////////////
const $meals = $( '#meals' )
const $cat = $('#category')
const $ingredients = $( '#ingredients' )
const $instruction = $('#instruction')
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
    if ( userInput == '' ) return;

    $.ajax(URL).then(
      function (data) {
        console.log("recipe is ready!");
            console.log( meal );
            $cat.text( meal.Cat)
            $ingredients.text( data.Ingredients )
            $instruction.text( data.Instruction)
            $( 'main' ).append()
           
      },
      function (error) {
          console.log( "we broke it!" )
          console.log(error);
      }
    );
}