"use strict"


//window.onload = () => {

/*
You can remove the following console.log() lines.
They are here to verify that we have access to the data
The data script files are located in the scripts/data directory
*/

//log the mountainsArray to the console (scripts/data/mountainData.js)
//console.log(mountainsArray)


//}

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

    /*
    bootstrap card example:
    
    <div class="card">
      <img src="PET IMAGE PATH GOES HERE" class="card-img-top" alt="ALT TEXT HERE">
      <div class="card-body">
        <h5 class="card-title">PET NAME HERE</h5>
        <p class="card-text">PET DETAILS HERE</p>
      </div>
    </div>
    */

    //     <ul class="list-group list-group-flush">
    //     <li class="list-group-item">An item</li>
    //     <li class="list-group-item">A second item</li>
    //     <li class="list-group-item">A third item</li>
    //   </ul>

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "w-25");

    let cardImage = document.createElement("img")
    cardImage.classList.add("card-img-top");

    cardImage.src = mountain.img;
    cardImage.alt = mountain.name;

    cardDiv.appendChild(cardImage)

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




    let cardUl = document.createElement("ul");
    cardUl.classList.add("list-group", "list-group-flush");

    let cardListItem = document.createElement("li");
    cardListItem.classList.add("list-group-item");

    cardListItem.innerHTML = `Elevation: ${mountain.elevation} ft`

    cardUl.appendChild(cardListItem);

    let cardListItem2 = document.createElement("li");
    cardListItem2.classList.add("list-group-item");

    cardListItem2.innerHTML = `Effort: ${mountain.effort} ft`

    cardUl.appendChild(cardListItem2);

    let cardListItem3 = document.createElement("li");
    cardListItem3.classList.add("list-group-item");

    cardListItem3.innerHTML = `Effort: ${mountain.effort}`

    cardUl.appendChild(cardListItem3);


    cardDiv.appendChild(cardBody);

    cardDiv.appendChild(cardUl)

    mountainDiv.append(cardDiv);

};

function initMountainsDropdown() {

    let mountainDropdown = document.querySelector("#mountainSelect");

    let defaultOption = document.createElement("option");

    defaultOption.value = "";

    defaultOption.textContent = "Select a Mountain";

    mountainDropdown.appendChild(defaultOption);

    mountainsArray.forEach((mountain) => {

        let newOption = document.createElement("option");

        newOption.value = mountain.name;

        newOption.textContent = mountain.name;

        mountainDropdown.appendChild(newOption);

    })

};
