

window.addEventListener("load", function() {
    let form = document.querySelector("form")
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let cargoInput = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
            formSubmission(this.document, list, pilotInput, copilotInput, fuelInput, cargoInput);
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
  
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        
    let index = pickPlanet(listedPlanets)
    let planet = listedPlanets[index]
    console.log(index)
       
    addDestinationInfo(this.document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
   })   
});