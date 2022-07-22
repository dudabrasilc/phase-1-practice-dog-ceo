console.log('%c HI', 'color: firebrick')


// Create an event listener to the document object so it allows all the DOM to load before we can manipulate it
document.addEventListener("DOMContentLoaded", () => {


function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        data.message.forEach(image => {
        // create image tag 
        const img = document.createElement("img");
        // grab div node for dog images
        const div = document.querySelector("#dog-image-container")
        div.appendChild(img)
        img.setAttribute("src", image)
        });
    })
}
fetchImages()


let allBreeds = [];
// console.log(allBreeds)

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(data => {
        // console.log(data.message)
        // grab ul node of dog breeds      
        allBreeds = Object.keys(data.message);
        renderBreeds(allBreeds);
    })
}
fetchBreeds()




function renderBreeds(allBreeds) {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";
    // console.log("renderBreeds: ", allBreeds)
allBreeds.forEach(breed => {
    renderOneBreed(breed, ul)
    })
}




function renderOneBreed(breed, ul) {
    const li = document.createElement("li");
    li.textContent = `${breed} `;
    li.addEventListener('click', (e) => {
        // check if have targeted the li nodes
        // console.log(e.target)
        // change the color of target once the click event is triggered
        e.target.style.color = "blue"
    })
    ul.appendChild(li);
    // create delete button
    let button = document.createElement("button");
    button.innerText = "delete";
    button.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
    li.appendChild(button)
}



// ------------------ MY CHANGE COLOR FUNCTION ------------------
// function changeBreedColor() {
//     // grab ul node that contains all li nodes of dog breeds
//     const ul = document.getElementById("dog-breeds")
//     // console.log(ul)
//     // add event listener to the ul node
//     ul.addEventListener('click', (e) => {
//         // check if have targeted the li nodes
//         // console.log(e.target)
//         // change the color of target once the click event is triggered
//         e.target.style.color = "blue"
//     })
// }
// changeBreedColor()




function filterBreeds() {
    // grab the dropdown node from the DOM
    const dropdown = document.getElementById("breed-dropdown")
    // console.log(dropdown)
    // grab ul node with dogs breeds list
    const ul = document.getElementById("dog-breeds")
    console.log(ul)
    // add "change" event listener to dropdown node
    dropdown.addEventListener("change", (e) => {
        let firstLetter = e.target.value;
        console.log("allBreeds: ", allBreeds)
        let filterBreeds = allBreeds.filter((breed) => breed[0] === firstLetter )
        // console.log(filterBreeds)
        renderBreeds(filterBreeds);
    })
}
filterBreeds()



})