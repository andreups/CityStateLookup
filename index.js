"use strict";

let cityStates = [{
        state: "California",
        stateAbbr: "CA",
        cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"]
    },
    {
        state: "Colorado",
        stateAbbr: "CO",
        cities: ["Aspen", "Boulder", "Denver", "Vail"]
    },
    {
        state: "Florida",
        stateAbbr: "FL",
        cities: ["Miami", "Orlando", "Fort Lauderdale", "Tampa"]
    },
    {
        state: "New York",
        stateAbbr: "NY",
        cities: ["New York", "Syracuse", "Albany", "Rochester"]
    },
    {
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Austin", "Dallas", "Houston", "San Antonio"]
    }
];

window.onload = function () {
    // load initial State dropdown
    loadStateDropdown();

    // connect onchange event handler for states
    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = onStateDropdownChanged;

    // connect onchange event handler for cities
    const cityDropdown = document.getElementById("cityDropdown");
    cityDropdown.onchange = onCityDropdownChanged;
}

function loadStateDropdown() {
    // find the state dropdown first
    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = onStateDropdownChanged;

    // creates Select One option first
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select One...";
    selectOneOption.value = "";
    stateDropdown.appendChild(selectOneOption);

    // loop through the cityStates array to find all the states
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        stateDropdown.appendChild(theOption);
    }
    // select first state listed by default
    stateDropdown.selectedIndex = 1;
    onStateDropdownChanged();
}

function onStateDropdownChanged() {
    // find state dropdown
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");

    // clear previous state paragraph
    const statePara = document.getElementById("statePara");
    statePara.innerHTML = "";

    // clear previous cities paragraph
    const citiesPara = document.getElementById("citiesPara");
    citiesPara.innerHTML = "";

    // clears previously selected city
    cityDropdown.options.length = 0;

    // find the selected state option 
    let selectedStateAbbr = stateDropdown.value;

    // checking if user chose "Select One"
    if (selectedStateAbbr == "") {

        // directs user to select a state first
        addSelectStateFirstOptionToCityDropdown();
        return;
    }
    // find the matching state by using the StateAbbr
    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStateAbbr);

    // Add a "Select league first..." <option>
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select One...";
    selectOneOption.value = "";
    cityDropdown.appendChild(selectOneOption);

    // loop through the matched cities array to find all the cities for the matching state
    for (let i = 0; i < matchingState.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingState.cities[i];
        cityDropdown.appendChild(theOption);
    }
}

function onCityDropdownChanged() {
    // re-declare HTML elements
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");
    const statePara = document.getElementById("statePara");
    const citiesPara = document.getElementById("citiesPara");

    // clear previous state paragraph
    statePara.innerHTML = "";

    // clear previous cities paragraph
    citiesPara.innerHTML = "";

    // get selected city from dropdown
    let selectedCity = cityDropdown.value;

    // selected city is blank if "Select One" option is chosen => exits function
    if (selectedCity == "") {
        return;
    }
    // gets the selected state using the selectedIndex function
    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;

    // prints out city and state message
    citiesPara.innerHTML = "City: " + selectedCity;
    statePara.innerHTML = "State: " + selectedState;
}

function addSelectStateFirstOptionToCityDropdown() {
    const cityDropdown = document.getElementById("cityDropdown");

    // Add a "Select State first..." <option>
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select State first...";
    selectOneOption.value = "";
    cityDropdown.appendChild(selectOneOption);
}