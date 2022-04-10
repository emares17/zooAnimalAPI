// Reload button function (include onClick="window.location.reload(); on button html)
const reloadButton = document.querySelector('button')

function reload() {
    reload = location.reload();
}

reloadButton.addEventListener('click', reload, false);


fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.image_link
        document.querySelector('h2').innerText = data.name
        document.querySelector('h3').innerText = `Animal Type: ${data.animal_type}`
        document.querySelector('.diet').innerText = `Animal Diet: ${data.diet}`
        document.querySelector('.location').innerText = `Found In: ${data.geo_range}`
        document.querySelector('.weight').innerText = `Weight Min/Max: ${data.weight_min} lbs/${data.weight_max} lbs`
    })
    .catch(err => {
        console.log(`error ${err}`)
    })























// document.querySelector('button').addEventListener('click', getDrink)

// function getDrink() {
    
//     let drink = document.querySelector('input').value
    
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.drinks[0])
//         document.querySelector('h2').innerText = data.drinks[0].strDrink;
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb;
//         document.querySelector('h3').innerText = data.drinks[0].strInstructions;

    

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })
// }


// fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.drinks[0])
//         document.querySelector('h2').innerText = data.drinks[0].strDrink;
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb;
//         document.querySelector('h3').innerText = data.drinks[0].strInstructions;

//         // OR-----
//         // document.querySelector('img').src = data.message;

//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })