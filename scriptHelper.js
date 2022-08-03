// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//    Here is the HTML formatting for our mission target div.
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

    let destination = document.getElementById("missionTarget")
    destination.innerHTML = `
    <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                    <img src="${imageUrl}">
                    `
}

function validateInput(testInput) {
            let test;
            
                if (testInput === "") {
                    return "Empty";
            } else if (!isNaN(testInput)) {
              
                return "Is a Number";
            } else if (isNaN(testInput)) {
                
                return "Not a Number";
            }
        };
           
  
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
                     
                let vPilotInput = validateInput(pilot.value);
                let vCopilotInput = validateInput(copilot.value);
                let vFuelInput = validateInput(fuelLevel.value);
                let vCargoInput = validateInput(cargoLevel.value);
                
             
                if (vPilotInput === "Empty" || vCopilotInput === "Empty" || vFuelInput === "Empty" || vCargoInput === "Empty") {
                    alert("Entry in all fields is required")
                
                    
                } else if (vPilotInput === "Is a Number" || vCargoInput === "Is a Number" || vFuelInput === "Not a Number" || vCargoInput === "Not a Number") {
                    alert("Please enter a valid name for the Pilot and/or Co-Pilot.")
                    
                } else {
   
    this.document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready.`
    this.document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilot.value} is ready.`
                }
    
    if(fuelLevel.value < 10000) {
        this.document.getElementById("faultyItems").style.visibility = "visible"
        this.document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch."
        this.document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        this.document.getElementById("launchStatus").style.color = "red"
        
    } else {
        this.document.getElementById("fuelStatus").innerHTML = "Shuttle has enough fuel for launch."
    }
    
    if(cargoLevel.value > 10000) {
        this.document.getElementById("faultyItems").style.visibility = "visible"
        this.document.getElementById("cargoStatus").innerHTML = "Too much mass for takeoff."
        this.document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
        this.document.getElementById("launchStatus").style.color = "red"
    } else {
        this.document.getElementById("cargoStatus").innerHTML = "Cargo mass within acceptable range for launch."
    }
    // Write conditional here to confirm shuttle is ready for launch given correct fuelLevel and cargoMass values. Should update the this.document text and color
    if (fuelLevel.value >= 10000 && cargoLevel.value < 10000) {
        this.document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
        this.document.getElementById("launchStatus").style.color = "green"
   
}
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) { 
        return response.json()
})
        return planetsReturned
};



function pickPlanet(planets) {
   let index = Math.floor(Math.random() * planets.length)
      return index
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
