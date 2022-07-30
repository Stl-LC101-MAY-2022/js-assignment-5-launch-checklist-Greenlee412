// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
        window.addEventListener("load", function() {
            let form = document.querySelector("form")
            form.addEventListener("submit", function() {
                let pilotInput = document.querySelector("input[name=pilotName]");
                let copilotInput = document.querySelector("input[name=copilotName]");
                let fuelInput = document.querySelector("input[name=fuelLevel]");
                let cargoInput = document.querySelector("input[name=cargoMass]");

                if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoInput.value === "") {
                    alert("Entry in all fields is required")
                    event.preventDefault()
                } else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false) {
                    alert("Please enter a valid name for the Pilot and/or Co-Pilot.")
                    event.preventDefault()
                } else if (isNaN(fuelInput.value) || isNaN(cargoInput.value)) {
                    alert("Please enter a valid number for Fuel Level and/or Cargo Mass.");
                    event.preventDefault()
                } else {
                    // This alert is to confirm that all fields have the correct typeof value submitted. Can remove once page is complete
                    alert("All required information successfully submitted!")
                    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} is ready.`
                    document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotInput.value} is ready.`
                    
                    // Need to write conditional for fuel levels here, including changing the DOM elements and style
                    if(fuelInput.value < 10000) {
                        document.getElementById("faultyItems").style.visibility = "visible"
                        document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch."
                        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
                        document.getElementById("launchStatus").style.color = "red"
                        
                    } else {
                        document.getElementById("fuelStatus").innerHTML = "Shuttle has enough fuel for launch."
                    }
                    
                    if(cargoInput.value > 10000) {
                        document.getElementById("faultyItems").style.visibility = "visible"
                        document.getElementById("cargoStatus").innerHTML = "Too much mass for takeoff."
                        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
                        document.getElementById("launchStatus").style.color = "red"
                    } else {
                        document.getElementById("cargoStatus").innerHTML = "Cargo mass within acceptable range for launch."
                    }
                    // Write conditional here to confirm shuttle is ready for launch given correct fuelLevel and cargoMass values. Should update the document text and color
                    if (fuelInput.value >= 10000 && cargoInput.value < 10000) {
                        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
                        document.getElementById("launchStatus").style.color = "green"
                    }
                    //Need event.preventDefault() here to stop the browser window from reloading on submission
                    event.preventDefault();
                }
                
            })
        })
    };
    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        // I have absolutely no idea what should go here or how to separate code from the validateInput function if it contains too much.
    
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
