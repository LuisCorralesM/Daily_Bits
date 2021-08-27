// Modulos JS
import {PreguntasAleatoriasHTML} from './preguntas.js'
// Secciones
const 
bienvenida = document.querySelector('#bienvenida'),
login = document.querySelector('#login'),
home = document.querySelector('#home'),
preguntasRange = document.querySelector('#preguntas-tipo1-range'),
preguntasDraggable = document.querySelector('#preguntas-tipo2-draggable'),
preguntasImg = document.querySelector('#preguntas-tipo3-img'),
estadisticas = document.querySelector('#estadisticas'),
perfil = document.querySelector('#perfil')


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

  // Navegar entre Lenguajes HMTL/CSS/JS
  // home-html
  if(e.target.matches('#btn-html')){
    pintarOcultar(home,preguntasRange)
    PreguntasAleatoriasHTML()
  }
//  

})


