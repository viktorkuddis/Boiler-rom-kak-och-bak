
async function getData() {
    const jsonResponse = await fetch("./data/recept.json");
    const portions = document.getElementById('portion-count');
    let portionsinput = 1;

    portions.addEventListener('change', function(){
        console.log(portions.value);
        portionsinput = portions.value;
    })


    if (jsonResponse.ok) {
        const json = await jsonResponse.json();
        //Diven som recepten placeras i
        const side = document.getElementById("side");
        const recipeInfo = document.getElementById("recept-info");
        //Kollar kontakten
        console.log(json);
        console.log(recipeInfo);
        json.forEach(function (object){
            // rubriker till recepten
            const recipeName = object.recipeName;
  
            
            // console.log(recipeName);
            const heading = document.createElement("h2");
            heading.classList.add("recipeheading");
            heading.textContent = recipeName;
            side.appendChild(heading);
            
            heading.addEventListener("click", function() {
                recipeInfo.innerHTML = '';
                if (recipeName == "Chokladkaka") {
                    const ingredients = json[0].ingredients;
                    const instructions = json[0].instructions;
                    const headline = document.createElement("h1");
                    headline.textContent = recipeName;
                    recipeInfo.appendChild(headline);

                    ingredients.forEach(function(ingredient){
                        const recipeInfoP = document.createElement("p");
                        recipeInfoP.textContent = `${ingredient.baseAmount * portionsinput} ${ingredient.unit} ${ingredient.name}`;
                        recipeInfo.appendChild(recipeInfoP);
                    })
                    const instructionP = document.createElement("p");
                    instructionP.textContent = instructions;
                    recipeInfo.appendChild(instructionP);
                } else if (recipeName == "Vaniljkakor") {
                    const ingredients = json[1].ingredients;
                    const instructions = json[1].instructions;
                    const headline = document.createElement("h1");
                    headline.textContent = recipeName;
                    recipeInfo.appendChild(headline);

                    ingredients.forEach(function(ingredient){
                        const recipeInfoP = document.createElement("p");
                        recipeInfoP.textContent = `${ingredient.baseAmount * portionsinput} ${ingredient.unit} ${ingredient.name}`;
                        recipeInfo.appendChild(recipeInfoP);
                    })
                    const instructionP = document.createElement("p");
                    instructionP.textContent = instructions;
                    recipeInfo.appendChild(instructionP);
                } else if (recipeName == "Kolakakor"){
                    const ingredients = json[2].ingredients;
                    const instructions = json[2].instructions;
                    const headline = document.createElement("h1");
                    headline.textContent = recipeName;
                    recipeInfo.appendChild(headline);

                    ingredients.forEach(function(ingredient){
                        const recipeInfoP = document.createElement("p");
                        recipeInfoP.textContent = `${ingredient.baseAmount * portionsinput} ${ingredient.unit} ${ingredient.name}`;
                        recipeInfo.appendChild(recipeInfoP);
                    })
                    const instructionP = document.createElement("p");
                    instructionP.textContent = instructions;
                    recipeInfo.appendChild(instructionP);
                } else if (recipeName == "Hallongrottor"){
                    const ingredients = json[3].ingredients;
                    const instructions = json[3].instructions;
                    const headline = document.createElement("h1");
                    headline.textContent = recipeName;
                    recipeInfo.appendChild(headline);

                    ingredients.forEach(function(ingredient){
                        const recipeInfoP = document.createElement("p");
                        recipeInfoP.textContent = `${ingredient.baseAmount * portionsinput} ${ingredient.unit} ${ingredient.name}`;
                        recipeInfo.appendChild(recipeInfoP);
                    })
                    const instructionP = document.createElement("p");
                    instructionP.textContent = instructions;
                    recipeInfo.appendChild(instructionP);
                } else console.log("Error!!");
            })
        
        })
    }
}

getData();