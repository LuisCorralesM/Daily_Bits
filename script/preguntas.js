export {PreguntasAleatoriasHTML}
import { preguntasHTML, preguntasCSS } from "./bdPraguntas.js"
import {draggable,validadorRespuestasDraggable,convinacionRespuestas} from './draggable.js'
// Secciones
const 
home = document.querySelector('#home'),
estadisticas = document.querySelector('#estadisticas'),
preguntasRange = document.querySelector('#preguntas-tipo1-range'),
preguntasDraggable = document.querySelector('#preguntas-tipo2-draggable'),
preguntasImg = document.querySelector('#preguntas-tipo3-img'),
mensajeExito = document.querySelectorAll('.continuar')
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
//VIDAS
let vidas = 4
// Metodo para regresar al HOME desde categoría HTML
document.addEventListener('click', (e)=>{
  if(e.target.matches('.regresar')){
    // me sercioro de despintar todas las interfaces de preguntas
    preguntasDraggable.style.display = 'none'
    preguntasImg.style.display = 'none'
    preguntasRange.style.display = 'none'  
    // pinto el home de nuevo 
    home.classList.toggle('pintar-ocultar')
  }
})
// En el arreglo orden se guardan las preguntas que ya salieron, y se comparan con la r (de random) para evitar que se repitan las preguntas. cuando el array 'orden' tiene el mismo length que el obj Preguntas, significa que ya se mostraron todas las preguntas.
let
orden = [],
r

// contadores para la sección html
let 
respuCorrecta,
respuDraggableCorrecta,
contadorRespuestasBuenas = 0,
contadorRespuestasMalas = 0;

// Se crean funciones para imprimir las preguntas en cada interfaz teniendo encuenta que hay 3 tipos: range, draggable e img
const 
tipoRange = (pregunta,r)=>{
  let spanVidasRange = document.querySelectorAll('.vidas')
  spanVidasRange[0].textContent = vidas

  parrafoPreguntaRange.textContent = pregunta[r].enunciado
  opcionRespuesta1.textContent = pregunta[r].opcion1
  opcionRespuesta2.textContent = pregunta[r].opcion2
  opcionRespuesta3.textContent = pregunta[r].opcion3  

  preguntasDraggable.style.display = 'none'
  preguntasImg.style.display = 'none'
  preguntasRange.style.display = 'block'
},
tipoDraggable = (pregunta,r)=>{
  let spanVidasDraggable = document.querySelectorAll('.vidas')
  spanVidasDraggable[1].textContent = vidas

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
  let spanVidasImg = document.querySelectorAll('.vidas')
  spanVidasImg[2].textContent = vidas

  parrafoPreguntaImg.textContent = pregunta[r].enunciado
  opcionImg1.setAttribute('src', pregunta[r].src1)
  opcionImg2.setAttribute('src', pregunta[r].src2)
  opcionImg3.setAttribute('src', pregunta[r].src3)
  opcionImg4.setAttribute('src', pregunta[r].src4)

  preguntasDraggable.style.display = 'none'
  preguntasImg.style.display = 'block'
  preguntasRange.style.display = 'none'
}

//imprimir la pregunta segun su tipo
const elegirPregunta = (categoriaPreguntas,r)=>{
  if(categoriaPreguntas[r].tipo == 'range'){
    tipoRange(categoriaPreguntas,r)
  }
  if(categoriaPreguntas[r].tipo == 'draggable'){
    tipoDraggable(categoriaPreguntas,r)
  }
  if(categoriaPreguntas[r].tipo == 'img'){
    tipoImg(categoriaPreguntas,r)
  }

}

// Preguntas Aleatorias
const PreguntasAleatoriasHTML = ()=>{
      do{
        r=Math.floor(Math.random()*preguntasHTML.length) 
      } while(orden.indexOf(r)>=0)
      // El "while" en este caso lo uso para validar que la posición random no exista en el array donde estoy guardando el historial de 
      // posiciones ya que si la posición existe, el "do" se repite hasta encontrar una posición que aun no exista en el array historial 
      // random llamado "orden", para garantizar que no se repitan las preguntas.
      orden.push(r)
      elegirPregunta(preguntasHTML,r)
}

//salir de preguntas y pasar a estadisticas
const terminarPreguntas = ()=>{
  orden = []
  preguntasDraggable.style.display = 'none'
  preguntasImg.style.display = 'none'
  preguntasRange.style.display = 'none'
  //para mostrar las respuestas buenas y malas de seccion html
  document.querySelector('.totalRespuestas').textContent = contadorRespuestasBuenas + contadorRespuestasMalas
  document.querySelector('.verde').textContent = contadorRespuestasBuenas
  document.querySelector('.rojo').textContent = contadorRespuestasMalas
  estadisticas.classList.toggle('pintar-ocultar')
}

// Guardar los opciones de respuestas clickeadas
document.addEventListener('click', (e)=>{
  e.preventDefault()
  e.stopPropagation()

  // aqui validamos si la iltima opcion clickeada es igual a la respuesta correcta
  if( !(e.target.matches('.btnComprobar')) && !(e.target.matches('#btn-html'))){
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

  // -------------------------------------------------------------------------------------------------------------
  document.addEventListener('click', (e)=>{
  e.preventDefault()
  e.stopPropagation()

  // estas validaciones solo sirven para preguntas tipo img y range
  if(e.target.matches('.btnComprobar')){    
      if(respuCorrecta){
        contadorRespuestasBuenas++
          console.log('Respuestas correctas: ' + contadorRespuestasBuenas)
          mensajeExito.forEach(mensaje =>{
            mensaje.style.display = 'block'
          })
      }
      if(!respuCorrecta){
          vidas--
          contadorRespuestasMalas++

          if(vidas > 0){
            console.log(vidas);
            
            console.log('Respuestas incorrectas: ' + contadorRespuestasMalas)
            alert('respuesta incorrecta')
    
              if(orden.length == preguntasHTML.length){
                terminarPreguntas()
              }else{
                PreguntasAleatoriasHTML()
              }  
          }else{
            alert('Te quedaste sin vidas, vuelve a intentarlo')
            preguntasDraggable.style.display = 'none'
            preguntasImg.style.display = 'none'
            preguntasRange.style.display = 'none'    
            home.classList.toggle('pintar-ocultar') 
            vidas = 4   
            orden = []
          }
      }
  }
  // -------------------------------------------------------------------------------------------------------------
  // validacion para preguntas de tipo draggable
  if(e.target.matches('.btnComprobar-draggable')){
    validadorRespuestasDraggable()

    // console.log(convinacionRespuestas);
    // console.log(preguntasHTML[r].respuesta);

    let arrayResp = preguntasHTML[r].respuesta
    // console.log(arrayResp);

    for(let i=0; i<arrayResp.length; i++){
      let
      posicion1 = convinacionRespuestas[i],
      posicion2 = arrayResp[i],
      comparacion = posicion1-posicion2;

      // console.log('posi1: ' + posicion1 + ' posi2: ' + posicion2 + ' comparacion: ' + comparacion);

      if(comparacion === 0){
        respuDraggableCorrecta = true
      }else{
        respuDraggableCorrecta = false
        break
      }
    }
    // console.log(respuDraggableCorrecta);
    if(respuDraggableCorrecta){
      contadorRespuestasBuenas++
      console.log('Respuestas correctas: ' + contadorRespuestasBuenas)
      mensajeExito.forEach(mensaje =>{
        mensaje.style.display = 'block'
      })
    }
    if(!respuDraggableCorrecta){
      vidas--
      contadorRespuestasMalas++
      console.log(vidas);

        if(vidas > 0){
          console.log('Respuestas incorrectas: ' + contadorRespuestasMalas)
          alert('respuesta incorrecta')
    
            if(orden.length == preguntasHTML.length){
              console.log('------------la 6ta pregunta fue mala');
              terminarPreguntas()
            }else{
              PreguntasAleatoriasHTML()
            }  
        }else{
          alert('Te quedaste sin vidas, vuelve a intentarlo')
          preguntasDraggable.style.display = 'none'
          preguntasImg.style.display = 'none'
          preguntasRange.style.display = 'none'    
          home.classList.toggle('pintar-ocultar') 
          vidas = 4   
          orden = []
        }
    }
  }
// -------------------------------------------------------------------------------------------------------------
  // Si la respuesta fué buena, habrá aparecido el boton continuar
  if(e.target.matches('.btnContinuar')){
    // se oculta el mensaje de exito y se avanza a la siguiente pregunta
    mensajeExito.forEach(mensaje =>{
      mensaje.style.display = 'none'
      })  
      if(orden.length == preguntasHTML.length){
        terminarPreguntas()
      }else{
        PreguntasAleatoriasHTML()
      }
    // aqui voy a invocar una función que guarde el avance en porcentaje y luego lo use para las barras de progreso
  }
})

// Funcion para ordenar las respuestas de tipo Draggable
draggable(img1,img2,img3,img4,img5)


