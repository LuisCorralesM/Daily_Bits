// Modulos JS
import { preguntasHTML,preguntasCSS } from './bdPraguntas.js'
import {PreguntasAleatoriasHTML,categoriaLenguaje} from './preguntas.js'
import {draggable} from './draggable.js'

// Secciones
const 
bienvenida = document.querySelector('#bienvenida'),
login = document.querySelector('#login'),
home = document.querySelector('#home'),
estadisticas = document.querySelector('#estadisticas'),
perfil = document.querySelector('#perfil')

// IMGs Draggable
const
img1 = document.querySelector('.img1 img'),
img2 = document.querySelector('.img2 img'),
img3 = document.querySelector('.img3 img'),
img4 = document.querySelector('.img4 img'),
img5 = document.querySelector('.img5 img')

// Metodo para navegar entre Home/Estadisticas/Perfil
const
pintarOcultar = (x,y)=>{
  x.classList.toggle('pintar-ocultar')
  y.classList.toggle('pintar-ocultar')
}

setTimeout(() => {
  pintarOcultar(bienvenida,home)
  // setTimeout(() => {
  //   pintarOcultar(login,home)
  // }, 1000);
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
    draggable(img1,img2,img3,img4,img5,preguntasHTML)
    
  }

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
  draggable(img1,img2,img3,img4,img5,preguntasCSS)
  
}


})

