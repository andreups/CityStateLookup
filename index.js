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
        state: "Texas",
        stateAbbr: "TX",
        cities: ["Austin", "Dallas", "Houston", "San Antonio"]
    },
    {
        state: "New York",
        stateAbbr: "NY",
        cities: ["New York", "Syracuse", "Albany", "Rochester"]
    },
    {
        state: "Florida",
        stateAbbr: "FL",
        cities: ["Miami", "Orlando", "Fort Lauderdale", "Tampa"]
    }
];

window.onload = function () {
    loadStateDropdown();

    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = onStateDropdownChanged;

    const cityDropdown = document.getElementById("cityDropdown");
    cityDropdown.onchange = onCityDropdownChanged;
}

function loadStateDropdown() {
    const stateDropdown = document.getElementById("stateDropdown");
    stateDropdown.onchange = onStateDropdownChanged;

    let selectOneOption = document.createElement("option"); //creates <option> element
    selectOneOption.textContent = "Select One...";
    selectOneOption.value = "";
    stateDropdown.appendChild(selectOneOption);

    for (let i = 0; i < cityStates.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        stateDropdown.appendChild(theOption);
    }
    stateDropdown.selectedIndex = 1;
    onStateDropdownChanged();
  }

function onStateDropdownChanged() {
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");

    const statePara = document.getElementById("statePara");
    statePara.innerHTML = "";

    const citiesPara = document.getElementById("citiesPara");
    citiesPara.innerHTML = "";

    cityDropdown.options.length = 0;

    let selectedStateAbbr = stateDropdown.value;

    if (selectedStateAbbr == "") {
        addSelectStateFirstOptionToCityDropdown();
        return;
    }

    let matchingState = cityStates.find(arrayElement => arrayElement.stateAbbr == selectedStateAbbr);

    let selectOneOption = document.createElement("option"); //creates <option> element
    selectOneOption.textContent = "Select One...";
    selectOneOption.value = "";
    cityDropdown.appendChild(selectOneOption);

    for (let i = 0; i < matchingState.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingState.cities[i];
        cityDropdown.appendChild(theOption);
    }
}

function onCityDropdownChanged() {
    const stateDropdown = document.getElementById("stateDropdown");
    const cityDropdown = document.getElementById("cityDropdown");
    const statePara = document.getElementById("statePara");
    const citiesPara = document.getElementById("citiesPara");

    statePara.innerHTML = "";

    citiesPara.innerHTML = "";

    let selectedCity = cityDropdown.value;
    
    if (selectedCity == "") {
        return;
    }

    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;

    citiesPara.innerHTML = "City: " + selectedCity;
    statePara.innerHTML = "State: " + selectedState;
}

function addSelectStateFirstOptionToCityDropdown() {
    const cityDropdown = document.getElementById("cityDropdown");

    // Add a "Select State first..." <option>
    let selectOneOption = document.createElement("option"); // creates <option> element
    selectOneOption.textContent = "Select State first...";
    selectOneOption.value = "";
    cityDropdown.appendChild(selectOneOption);
}