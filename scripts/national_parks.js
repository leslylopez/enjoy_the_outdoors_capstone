"use strict"


window.onload = function () {

    //runn the code that populates the location Dropdown
    initparkLocationDropdown();

    initparkTypeDropdown();

    //get the location dropdown
    let parkLocationDropdown = document.querySelector("#parksSelectByLocation")
    let parkTypeDropdown = document.querySelector("#parksSelectByType")

    let locationRadio = document.querySelector("#locationRadio");
    let typeRadio = document.querySelector("#typeRadio");

    hideElement("#parksSelectByLocation");
    hideElement("#parksSelectByType")

    //addeventlistener

    locationRadio.addEventListener("click", hideShowRadio);
    typeRadio.addEventListener("click", hideShowRadio);

    //make sure we run the code to work with the state location when it's selected
    parkLocationDropdown.addEventListener("change", displayLocation);
    parkTypeDropdown.addEventListener("change", displayTypeInfo);


}


function hideShowRadio(event) {

    if (event.target.value === "type") {
        showElement("#parksSelectByType");
        hideElement("#parksSelectByLocation");
    } else {
        showElement("#parksSelectByLocation");
        hideElement("#parksSelectByType");
    }
}

//This function will hide an HTML element on the page
//Just pass it the id of the element you want to hide
function hideElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "none";
}

//This function will show an HTML element on the page
//Just pass it the id of the element you want to show
function showElement(someSelector) {
    let el = document.querySelector(someSelector);
    el.style.display = "block";
}

function displayLocation(event) {

    //get the selected category from the dropdown
    let selectedState = event.target.value;

    //use filter to match locations
    let matchingNationalPark = nationalParksArray.filter((location) => {

        return location.State === selectedState

    })

    //get table body from HTML, so we can add rows 
    let tableBody = document.querySelector("#parkTableBody")

    //empty table rows that were previously selected
    tableBody.innerHTML = "";

    //loop over the National Parks array
    matchingNationalPark.forEach((location) => {

        buildTableRow(tableBody, location);

    })

}

function displayTypeInfo(event) {

    let selectedParkType = event.target.value;

    let matchingParkType = nationalParksArray.filter((type) => {

        if (type.LocationName.indexOf(selectedParkType) !== -1) {

            return true;

        }

        return false;

    });

    console.log(selectedParkType)

    let tableBody = document.querySelector("#parkTableBody")

    tableBody.innerHTML = "";

    // //loop over National Parks array
    matchingParkType.forEach((data) => {

        buildTableRow(tableBody, data);

    })


};



function buildTableRow(tableBody, data) {

    //create the row to hold the data
    let newRow = tableBody.insertRow()

    let cell1 = newRow.insertCell();
    cell1.innerHTML = data.LocationID;

    let cell2 = newRow.insertCell();
    cell2.innerHTML = data.LocationName;

    let cell3 = newRow.insertCell();
    cell3.innerHTML = `${data.Address}, ${data.City}, ${data.State}, ${data.ZipCode}`

    let cell4 = newRow.insertCell();
    cell4.innerHTML = `Phone:${data.Phone} Fax:${data.Fax}`

    if (data.Visit) {

        let cell5 = newRow.insertCell();
        cell5.innerHTML = data.Visit;

    } else {

        let cell5 = newRow.insertCell();
        cell5.innerHTML = `N/A`

    }

}


function initparkLocationDropdown() {

    //get the dropdown for the location from national parks HTML
    let parkLocationDropdown = document.querySelector("#parksSelectByLocation");


    let defaultOption = document.createElement("option");

    //empty value for "select" value
    defaultOption.value = "";

    defaultOption.textContent = "Select a State";
    //add the option to the dropdown
    parkLocationDropdown.appendChild(defaultOption);

    locationsArray.forEach((state) => {

        //create new option for the states 
        let newOption = document.createElement("option");

        //set the value for the state
        newOption.value = state;

        //user will see the name of the state
        newOption.textContent = state;

        //add the new option
        parkLocationDropdown.appendChild(newOption);

    })

}

function initparkTypeDropdown() {

    let parkTypeDropdown = document.querySelector("#parksSelectByType")

    let defaultOption = document.createElement("option")

    defaultOption.value = "";

    defaultOption.textContent = "Select Park Type";

    parkTypeDropdown.appendChild(defaultOption);

    parkTypesArray.forEach((parkType) => {

        let newOption = document.createElement("option");

        newOption.value = parkType;

        newOption.textContent = parkType;

        parkTypeDropdown.appendChild(newOption);

    }
    )

}

function getLocationInfo(nationalParksArray, State) {

    //an empty list to hold our matches
    let matching = [];

    //the number of national parks
    let numItems = nationalParksArray.length;

    //loop over the states to find matches
    for (let i = 0; i < numItems; i++) {
        if (nationalParksArray[i].State === State) {
            matching.push(nationalParksArray[i]);
        }
    }

    return matching;


}
