

function allProperty(callback) {
    // Fetch a la api
    const data = fetch("https://back-inmobiliaria-production.up.railway.app/api");

    data.then(res => res.json())
        .then(response => {
            //console.log(response)
            callback(response)
        });
    
}

function oneProperty(id , callback) {
    // Fetch a la api
    const data = fetch("https://back-inmobiliaria-production.up.railway.app/api/" + id);

    data.then(res => res.json())
        .then(response => {
            //console.log(response)
            callback(response)
        });
    
}



export {allProperty, oneProperty};
