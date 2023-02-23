import { oneProperty } from "./routes.js";

let content = document.getElementById('content');

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

oneProperty (id , data => {
    let property = data.property
    console.log(property);
    
        content.innerHTML += ` <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
            <p class="h6 m-0">Referencia:</p>
            <span class="badge badge-primary badge-pill">${property.reference}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
            <p class="h6 m-0">Habitaciones:</p>
            <span class="badge badge-primary badge-pill">${property.rooms}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
            <p class="h6 m-0">Area:</p>
            <span class="badge badge-primary badge-pill">${property.area} m2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
            <p class="h6 m-0">Precio:</p>
            <span class="badge badge-primary badge-pill">$ ${property.price}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
            <p class="h6 m-0">Pais:</p>
            <span class="badge badge-primary badge-pill">${property.country}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
            <p class="h6 m-0">Ciudad:</p>
            <span class="badge badge-primary badge-pill">${property.city}</span>
        </li>
        
    </ul>`
    
})