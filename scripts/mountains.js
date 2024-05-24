"use strict"


window.onload = () => {

    initMountainsDropdown();

    let mountainDropdown = document.querySelector("#mountainSelect");

    //display selected mountain when dropdown is changed
    mountainDropdown.addEventListener("change", displayMountainCard)

}

function displayMountainCard(event) {

    //the div where the mountain will be displayed
    let mountainDiv = document.querySelector("#mountains")

    //clears out previous mountain
    mountainDiv.innerHTML = "";

    //get selected value from dropdown
    let selectedMountain = event.target.value;

    //find matching mountain in the mountains array
    let mountain = mountainsArray.find((mountain) => {

        if (mountain.name === selectedMountain) {

            return true;

        }

        return false;

    })

    //made a card div to hold all the card content
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "w-25", "bg-dark", "text-light", "container-fluid");

    let cardImage = document.createElement("img")
    cardImage.classList.add("card-img-top", "mx-auto");

    cardImage.src = mountain.img;
    cardImage.alt = mountain.name;

    cardDiv.appendChild(cardImage)

    //added card body that will hold the paragraph and card title
    let cardBody = document.createElement("div");
    cardDiv.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    cardTitle.innerText = mountain.name;

    cardBody.appendChild(cardTitle);

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");

    cardText.innerHTML =
        `${mountain.desc}`;

    cardBody.appendChild(cardText);

    //created unordered list to hold list items
    let cardUl = document.createElement("ul");
    cardUl.classList.add("list-group", "list-group-flush");

    let cardListItem = document.createElement("li");
    cardListItem.classList.add("list-group-item");

    cardListItem.innerHTML = `Elevation: ${mountain.elevation} ft`
    //appended every list item added
    cardUl.appendChild(cardListItem);

    let cardListItem2 = document.createElement("li");
    cardListItem2.classList.add("list-group-item");

    cardListItem2.innerHTML = `Effort: ${mountain.effort} ft`

    cardUl.appendChild(cardListItem2);

    let cardListItem3 = document.createElement("li");
    cardListItem3.classList.add("list-group-item");

    cardListItem3.innerHTML = `Lat: ${mountain.coords.lat}  Lng: ${mountain.coords.lng}`

    cardUl.appendChild(cardListItem3);

    //appended all elements
    cardDiv.appendChild(cardBody);

    cardDiv.appendChild(cardUl)

    mountainDiv.append(cardDiv);

};


//the dropdown for list of mountains
function initMountainsDropdown() {

    let mountainDropdown = document.querySelector("#mountainSelect");

    let defaultOption = document.createElement("option");

    //resets the dropdown after new item is selected
    defaultOption.value = "";

    defaultOption.textContent = "Select a Mountain";

    mountainDropdown.appendChild(defaultOption);

    //looped over mountain list to access it's properties
    mountainsArray.forEach((mountain) => {

        let newOption = document.createElement("option");

        newOption.value = mountain.name;

        newOption.textContent = mountain.name;

        mountainDropdown.appendChild(newOption);

    })

};
