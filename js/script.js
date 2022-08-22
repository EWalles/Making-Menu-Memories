const mealContainer = document.getElementById('btn');

fetchbtn.addEventListener('click', () => {
    fetch('www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
        createMeal(res.meals[0])
    
    })
    });