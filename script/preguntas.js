export {PreguntasAleatoriasHTML}
import { preguntasHTML } from "./bdPraguntas.js"
import {draggable} from './draggable.js'
// Secciones
const 
home = document.querySelector('#home'),
estadisticas = document.querySelector('#estadisticas'),
preguntasRange = document.querySelector('#preguntas-tipo1-range'),
preguntasDraggable = document.querySelector('#preguntas-tipo2-draggable'),
preguntasImg = document.querySelector('#preguntas-tipo3-img'),
mensajeExito = document.querySelectorAll('.continuar'),
bntContinuar = document.querySelectorAll('.btnContinuar')
// Contenido Preguntas-range
const
parrafoPreguntaRange = document.querySelector('.enunciado-pregunta p'),
opcionRespuesta1 = document.querySelector('.preguntas .opcion1 p'),
opcionRespuesta2 = document.querySelector('.preguntas .opcion2 p'),
opcionRespuesta3 = document.querySelector('.preguntas .opcion3 p')
// Contenido Preguntas-draggable
const
parrafoPreguntaDraggable = document.querySelector('.enunciado-pregunta-draggable p'),
img1 = document.querySelector('.img1 img'),
img2 = document.querySelector('.img2 img'),
img3 = document.querySelector('.img3 img'),
img4 = document.querySelector('.img4 img'),
img5 = document.querySelector('.img5 img')
// Contenido Preguntas-img
const
parrafoPreguntaImg = document.querySelector('.enunciado-pregunta-img p'),
opcionImg1 = document.querySelector('.opcion-img1 img'),
opcionImg2 = document.querySelector('.opcion-img2 img'),
opcionImg3 = document.querySelector('.opcion-img3 img'),
opcionImg4 = document.querySelector('.opcion-img4 img')

// Metodo para navegar entre Home/Estadisticas/Perfil
const
pintarOcultar = (x,y)=>{
  x.classList.toggle('pintar-ocultar')
  y.classList.toggle('pintar-ocultar')
}

// Metodo para regresar al HOME desde categoría HTML
document.addEventListener('click', (e)=>{
  if(e.target.matches('.regresar')){
    preguntasDraggable.style.display = 'none'
    preguntasImg.style.display = 'none'
    preguntasRange.style.display = 'none'   
    pintarOcultar(preguntasRange,home)
  }
})
// En el arreglo orden se guardan las preguntas que ya salieron, y se comparan con la r (de random) para evitar que se repitan las preguntas. cuando el array 'orden' tiene el mismo length que el obj Preguntas, significa que ya se mostraron todas las preguntas.
let
orden = [],
r

const 
  tipoRange = (pregunta,r)=>{
  parrafoPreguntaRange.textContent = pregunta[r].enunciado
  opcionRespuesta1.textContent = pregunta[r].opcion1
  opcionRespuesta2.textContent = pregunta[r].opcion2
  opcionRespuesta3.textContent = pregunta[r].opcion3  

  preguntasDraggable.style.display = 'none'
  preguntasImg.style.display = 'none'
  preguntasRange.style.display = 'block'
},
tipoDraggable = (pregunta,r)=>{
  parrafoPreguntaDraggable.textContent = pregunta[r].enunciado
  img1.setAttribute('src', pregunta[r].src1)
  img2.setAttribute('src', pregunta[r].src2)
  img3.setAttribute('src', pregunta[r].src3)
  img4.setAttribute('src', pregunta[r].src4)
  img5.setAttribute('src', pregunta[r].src5)

  preguntasDraggable.style.display = 'block'
  preguntasImg.style.display = 'none'
  preguntasRange.style.display = 'none'

},
tipoImg = (pregunta,r)=>{
  parrafoPreguntaImg.textContent = pregunta[r].enunciado
  opcionImg1.setAttribute('src', pregunta[r].src1)
  opcionImg2.setAttribute('src', pregunta[r].src2)
  opcionImg3.setAttribute('src', pregunta[r].src3)
  opcionImg4.setAttribute('src', pregunta[r].src4)

  preguntasDraggable.style.display = 'none'
  preguntasImg.style.display = 'block'
  preguntasRange.style.display = 'none'
}

// Preguntas Aleatorias
const PreguntasAleatoriasHTML = ()=>{
      do{
        r=Math.floor(Math.random()*preguntasHTML.length) 
      } while(orden.indexOf(r)>=0){
        if(preguntasHTML[r].tipo == 'range'){
          tipoRange(preguntasHTML,r)
        }
        if(preguntasHTML[r].tipo == 'draggable'){
          tipoDraggable(preguntasHTML,r)
        }
        if(preguntasHTML[r].tipo == 'img'){
          tipoImg(preguntasHTML,r)
        }
        orden.push(r)
        // console.log(preguntas[r]);
        // console.log(orden);
  
        if(orden.length == preguntasHTML.length){
          console.log('fin');
          orden = []
          preguntasDraggable.style.display = 'none'
          preguntasImg.style.display = 'none'
          preguntasRange.style.display = 'none'
          // para mostrar las respuestas buenas y malas de seccion html
          document.querySelector('.totalRespuestas').textContent = contadorRespuestasBuenas + contadorRespuestasMalas
          document.querySelector('.verde').textContent = contadorRespuestasBuenas
          document.querySelector('.rojo').textContent = contadorRespuestasMalas

          estadisticas.classList.toggle('pintar-ocultar')
        }  
      } 

}

let respuCorrecta;
let contadorRespuestasBuenas = 0;
let contadorRespuestasMalas = 0;

// Listar preguntas para HTML
document.addEventListener('click', (e)=>{
  e.preventDefault()
  e.stopPropagation()

  // Puse la clase btnComprobar en el html a todos los botones de preguntas
  if( !(e.target.matches('.btnComprobar')) && !(e.target.matches('#btn-html')) ){
      let elemento = parseInt(e.target.dataset.id) 
      if(elemento === preguntasHTML[r].respuesta){
        // console.log('respuesta correcta');
        respuCorrecta = true;
      }else{
        // console.log('respuesta incorrecta');
        respuCorrecta = false
      }
  } 
})


document.addEventListener('click', (e)=>{
  e.preventDefault()
  e.stopPropagation()

  if(e.target.matches('.btnComprobar')){
    // console.log(respuCorrecta);
    if(respuCorrecta){
      contadorRespuestasBuenas++
      console.log('Respuestas correctas: ' + contadorRespuestasBuenas)
      mensajeExito.forEach(mensaje =>{
        mensaje.style.display = 'block'
      })
    }
    if(!respuCorrecta){
      contadorRespuestasMalas++
      console.log('Respuestas incorrectas: ' + contadorRespuestasMalas)
      // si me queda tiempo, en la data pondré una pista para cada pregunta la cuál se mostrará por aquí
      alert('respuesta incorrecta')
      PreguntasAleatoriasHTML()
    }
  }
  if(e.target.matches('.btnContinuar')){
    mensajeExito.forEach(mensaje =>{
      mensaje.style.display = 'none'
      })  
    PreguntasAleatoriasHTML()
  }
})

// Funcion para ordenar las respuestas de tipo Draggable
draggable(img1,img2,img3,img4,img5)


