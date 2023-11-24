
async function getData() {
    const jsonResponse = await fetch("./data/recept.json");


    if (jsonResponse.ok) {
        const json = await jsonResponse.json();
        //Diven som recepten placeras i
        const receptInfo = document.getElementById("recept-info");
        //Kollar kontakten
        console.log(json);

        json.forEach(function (object){
            
        })
    }
}

getData();