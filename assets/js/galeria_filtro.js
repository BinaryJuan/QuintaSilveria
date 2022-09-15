const galeriaBoda = document.querySelectorAll('.galeriaBoda');
const galeriaInfantiles = document.querySelectorAll('.galeriaInfantiles')
const galeriaDecoracion = document.querySelectorAll('.galeriaDecoracion')
const galeriaEventos = document.querySelectorAll('.galeriaEventos')




const boda = document.querySelector('#boda');
const infantiles = document.querySelector('#infantiles')
const decoracion = document.querySelector('#decoracion')
const evento = document.querySelector('#evento')

boda.addEventListener('click', ()=>{
   galeriaBoda.forEach(element =>{
      element.removeAttribute('hidden')
   })    
})

infantiles.addEventListener('click', ()=>{
    galeriaInfantiles.forEach(element =>{
        element.removeAttribute('hidden')
    })
})

decoracion.addEventListener('click', ()=>{
    galeriaDecoracion.forEach(element =>{
        element.removeAttribute('hidden')
    })
})

evento.addEventListener('click', ()=>{
    galeriaEventos.forEach(element =>{
        element.removeAttribute('hidden')
    })
})