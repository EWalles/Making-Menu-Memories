console.log("connected");

const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

/////////////////////////
// CACHED ELEMENTS / ELEMENTS REFRENCES
/////////////////////////
const $meals = $( '#meals' )
const $cat = $('#category')
const $ingredients = $( '#ingredients' )
const $instruction = $('instruction')

/////////////////////////
// EVENT LISTENERS
/////////////////////////
$form.on( 'submit', handleGetData )

/////////////////////////
// FUNCTIONS
/////////////////////////
function handleGetData (meal)
{
    meal.preventDefault()
    userInput = $input.val()
    if ( userInput === '' ) return;

    $.ajax(URL+userInput).then(
      function (data) {
        console.log("recipe is ready!");
            console.log( meal );
            $cat.text( meal.Cat)
            $ingredients.text( data.Ingredients )
            $instruction.text( data.Instruction)
            $( 'main' ).append( `<img src="${ data.Poster }" alt="${ data.Title }"/>` )
            $input.val('')
      },
      function (error) {
          console.log( "we broke it!" )
          console.log(error);
      }
    );
}