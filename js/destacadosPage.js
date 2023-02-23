import {allProperty} from './routes.js';

let content = document.getElementById('prominentsContent');


allProperty(data => {
    console.log(data.properties);
    data.properties.map(i => {
        if (i.prominent == "True" || i.prominent == "true") {
            content.innerHTML += `<div class="col-lg-4 col-md-6 mb-4">
            <div class="rounded overflow-hidden mb-2">
                <img class="img-fluid" src="img/course-1.jpg" alt="">
                <div class="bg-secondary p-4">
                    <div class="d-flex justify-content-between mb-3">
                        <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>${i.rooms}</small>
                        <small class="m-0"><i class="far text-primary mr-2"></i>${i.area}m2</small>
                    </div>
                    <a class="h5" href="">Referencia de inmueble: ${i.reference}</a>
                    <div class="border-top mt-4 pt-4">
                        <div class="d-flex justify-content-between">
                            <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                            </h6>
                            <h5 class="m-0">$${i.price}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }
    })
});