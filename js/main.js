
async function getData() {
    const jsonResponse = await fetch("./data/recept.json");


    if (jsonResponse.ok) {
        const json = await jsonResponse.json();
        //Diven som recepten placeras i
        const side = document.getElementById("side");
        //Kollar kontakten
        console.log(json);

        json.forEach(function (object){
            const recipeName = object.recipeName;
            console.log(recipeName);
            const heading = document.createElement("h2");
            heading.classList.add("recipeheading");
            heading.textContent = recipeName;
            side.appendChild(heading);
        })
    }
}

getData();