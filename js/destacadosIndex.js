import {allProperty} from './routes.js';

let content = document.getElementById('prominentsIndex');

allProperty(data => {
    console.log(data.properties);
    let cont = 0
    let i = 0
    while (cont < 6) {

        if (data.properties[i].prominent == "True" || data.properties[i].prominent == "true") {
            content.innerHTML += `<div class="col-lg-4 col-md-6 mb-4">
            <div class="rounded overflow-hidden mb-2">
                <img class="img-fluid" src="img/course-1.jpg" alt="">
                <div class="bg-secondary p-4">
                    <div class="d-flex justify-content-between mb-3">
                        <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>${data.properties[i].rooms}</small>
                        <small class="m-0"><i class="far text-primary mr-2"></i>${data.properties[i].area}m2</small>
                    </div>
                    <a href="./detail.html?id=${data.properties[i]._id}">Reference: ${data.properties[i].reference}</a>
                    <div class="border-top mt-4 pt-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                            </h6>
                            <h5 class="m-0">$${data.properties[i].price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
            cont += 1
        }
        i+=1

    }
});




/*

 let cont = 0
    let i = 0
    while (cont >= 6) {

        if (data.properties[i].prominent == "True" || data.properties[i].prominent == "true") {
            content.innerHTML += `<div>
            <h2>Reference: ${i.reference}</h2>
            </div>`;
            cont += 1
        }
        i+=1

    }
    
    */



    /*
    FUNCION QUE SIRVE

    function propertysAll(callback) {
    // Fetch a la api
    const data = fetch("https://back-inmobiliaria-production.up.railway.app/api");
    let prominents= []

    data.then(res => res.json())
        .then(response => {
            //console.log(response.properties)
            response.properties.map(i => {
                if (i.prominent == "True" || i.prominent == "true"){
                    prominents.push(i)
                }
            })
        })
        .then(res => {
            console.log(prominents);
            callback(prominents)

        })
    
}


propertysAll((data) => {
    for (let i = 0 ; i <= 6 ; i++) {
        content.innerHTML += `<div>
        <h2>Reference: ${data[i].reference}</h2>
        </div>`
    }
})
    
    */