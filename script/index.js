// Modulos JS
import { preguntasHTML,preguntasCSS,preguntasJS} from './bdPraguntas.js'
import {PreguntasAleatoriasHTML,categoriaLenguaje,draggable} from './preguntas.js'
// import {draggable} from './draggable.js'

// Secciones
const 
bienvenida = document.querySelector('#bienvenida'),
login = document.querySelector('#login'),
home = document.querySelector('#home'),
estadisticas = document.querySelector('#estadisticas'),
perfil = document.querySelector('#perfil')

// Metodo para navegar entre Home/Estadisticas/Perfil
const
pintarOcultar = (x,y)=>{
  x.classList.toggle('pintar-ocultar')
  y.classList.toggle('pintar-ocultar')
}

setTimeout(() => {
  pintarOcultar(bienvenida,login)
  setTimeout(() => {
    pintarOcultar(login,home)
  }, 1000);
}, 1000);

document.addEventListener('click', (e)=>{
  e.stopPropagation()
  // nevegar entre Home/Estadisticas/Perfil
  // home-estadisticas/pefil
  if(e.target.matches('#btnH_Estadisticas')){
    pintarOcultar(home,estadisticas)
  }
  if(e.target.matches('#btnH_Perfil')){
    pintarOcultar(home,perfil)
  }

  // estadisticas-home/perfil
  if(e.target.matches('#btnE_Home')){
    pintarOcultar(estadisticas,home)
  }
  if(e.target.matches('#btnE_Perfil')){
    pintarOcultar(estadisticas,perfil)
  }
  // perfil-home/estadisticas
  if(e.target.matches('#btnP_Home')){
    pintarOcultar(perfil,home)
  }
  if(e.target.matches('#btnP_Estadisticas')){
    pintarOcultar(perfil,estadisticas)
  }

})

document.addEventListener('click', e=>{
    /* -------------------------------------------------EJECUCUIÓN PREGUNTAS-------------------------------------------------- */
  // Categoría Lenguajes HMTL/CSS/JS

  // home-html
  if(e.target.matches('#btn-html')){
    // solo despinto el home para que luego se pinte la pregunta que salga del random
    home.classList.toggle('pintar-ocultar')
    PreguntasAleatoriasHTML(preguntasHTML)
    document.addEventListener('click', (e)=>{
      e.preventDefault()
      e.stopPropagation()
      
      categoriaLenguaje(e,preguntasHTML)
    })
    // Funcion para ordenar las respuestas de tipo Draggable
    draggable(preguntasHTML)
    //img1,img2,img3,img4,img5,
  }

})

document.addEventListener('click', e=>{
  
  // home-css
  if(e.target.matches('#btn-css')){
    // solo despinto el home para que luego se pinte la pregunta que salga del random
    home.classList.toggle('pintar-ocultar')
    PreguntasAleatoriasHTML(preguntasCSS)
    document.addEventListener('click', (e)=>{
      e.preventDefault()
      e.stopPropagation()

      categoriaLenguaje(e,preguntasCSS)
    })
    // Funcion para ordenar las respuestas de tipo Draggable
    draggable(preguntasCSS)
    //img1,img2,img3,img4,img5,
  }

})

document.addEventListener('click', e=>{
  
  // home-css
  if(e.target.matches('#btn-js')){
    // solo despinto el home para que luego se pinte la pregunta que salga del random
    home.classList.toggle('pintar-ocultar')
    PreguntasAleatoriasHTML(preguntasJS)
    document.addEventListener('click', (e)=>{
      e.preventDefault()
      e.stopPropagation()

      categoriaLenguaje(e,preguntasJS)
    })
    // Funcion para ordenar las respuestas de tipo Draggable
    draggable(preguntasJS)
    //img1,img2,img3,img4,img5,
  }

})