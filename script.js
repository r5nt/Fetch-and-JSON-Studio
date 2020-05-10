// TODO: add code here
fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
    response.json().then((json) => {
        //From: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
        const sortedAstronauts = json.sort((a, b) => b.hoursInSpace > a.hoursInSpace ? 1 : -1);

        const container = document.getElementById("container");
        container.innerHTML += `
            <h2>Astronaut count: ${sortedAstronauts.length}</h2>
        `;
        for (const eachAstronaut of sortedAstronauts) {
            container.innerHTML += `
                 <div class="astronaut">
                    <div class="bio">
                        <h3>${eachAstronaut.firstName} ${eachAstronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${eachAstronaut.hoursInSpace}</li>
                            <li class="active">Active: ${eachAstronaut.active}</li>
                            <li>Skills: ${eachAstronaut.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${eachAstronaut.picture}>
                 </div>
            `;
        }

        const active = document.getElementsByClassName("active");
        for (const each of active) {
            if (each.innerHTML === "Active: true") {
                each.style.color = "green";
            }
        }
    });
});
