"use strict";

const mapa = document.querySelectorAll(".mapa");
const modalMapa = document.querySelector("#modalMapa");

mapa.forEach((e) => {
    e.addEventListener("click", () => {
        modalMapa.innerHTML = "";
        for (let lugar of mapaQuinta) {
            if (lugar.zona == e.innerText) {
                const rowMapa = document.createElement("div");
                rowMapa.classList.add("modal-content", "rounded-3");
                rowMapa.innerHTML = `
                                    <div class="modal-header  text-white tituloModal" >
                                        <h5 class="modal-title" id="exampleModalLabel">${lugar.nombre}</h5> 
                                        <img src="./assets/img/general/logoTrasparenteBlanco.png" class="img-fluid text-center"/>      
                                    </div>
                                    <div class="modal-body">

                                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
                                                <div class="carousel-indicators botonCarruasel">
                                                   
                                                </div>

                                                <div class="carousel-inner imagenCarrusel" >
                                                            
                                                   
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="bi bi-caret-left-fill fs-1" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="bi bi-caret-right-fill fs-1" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                    </div>                                        
                                        <p class="mt-3">${lugar.descripcion}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn boton text-white" data-bs-dismiss="modal" >Cerrar</button>       
                                    </div>                
                `;
                modalMapa.appendChild(rowMapa);
                const imagenCarrusel = document.querySelector(".imagenCarrusel");
                const botonCarruasel = document.querySelector(".botonCarruasel");
               
                let contar = 0;
                for (let i = 0;i < lugar.imagen.length;i++) {
                   
                    let imagenes = document.createElement("div");
                    if (i == 0) {
                        imagenes.classList.add("active");
                        
                    }
                    imagenes.classList.add("carousel-item");
                    imagenes.innerHTML = `
                    <img src='${lugar.imagen[i]}' class="d-block w-100" alt="..."></img>
                    `;

                    if (i == 0) {
                        botonCarruasel.innerHTML = `
                        <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="${i}" class="active " aria-current="true" aria-label="Slide ${i + 1}"></button>
                        `;
                    } else {
                        botonCarruasel.innerHTML += `
                        <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>
                        `;
                    }

                    contar++;
                    imagenCarrusel.appendChild(imagenes);
                }
            }
        }
    });
});
