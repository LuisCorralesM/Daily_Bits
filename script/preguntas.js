export {PreguntasAleatoriasHTML,categoriaLenguaje}
import {draggable,ordenRespuestasDraggable,convinacionRespuestas} from './draggable.js'

// Secciones
const 
home = document.querySelector('#home'),
estadisticas = document.querySelector('#estadisticas'),
mensajeExito = document.querySelectorAll('.continuar'),

preguntasRange = document.querySelector('#preguntas-tipo1-range'),
preguntasDraggable = document.querySelector('#preguntas-tipo2-draggable'),
preguntasImg = document.querySelector('#preguntas-tipo3-img')
// Contenido Preguntas-range
const
parrafoPreguntaRange = document.querySelector('.enunciado-pregunta p'),
opcionRespuesta1 = document.querySelector('.preguntas .opcion1 p'),
opcionRespuesta2 = document.querySelector('.preguntas .opcion2 p'),
opcionRespuesta3 = document.querySelector('.preguntas .opcion3 p')
// Contenido Preguntas-draggable
const
parrafoPreguntaDraggable = document.querySelector('.enunciado-pregunta-draggable p'),
divPreguntas = document.querySelector('.preguntas-draggable')
// Contenido Preguntas-img
const
parrafoPreguntaImg = document.querySelector('.enunciado-pregunta-img p'),
opcionImg1 = document.querySelector('.opcion-img1 img'),
opcionImg2 = document.querySelector('.opcion-img2 img'),
opcionImg3 = document.querySelector('.opcion-img3 img'),
opcionImg4 = document.querySelector('.opcion-img4 img')

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

let
orden = [],
r
//VIDAS
let vidas = 4

// contadores de respuestas
let 
respuCorrecta = false,
respuDraggableCorrecta = false,
contadorRespuestasBuenas = 0,
contadorRespuestasMalas = 0;

/* -------------------------------------------------DECLARACIÓN-------------------------------------------------- */

// Se crean funciones para imprimir las preguntas en cada interfaz teniendo encuenta 
// que hay 3 tipos: range, draggable e img
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

  divPreguntas.innerHTML = `
    <div class="img1 img1-1">
    <img src="${pregunta[r].src1}">
    </div>
    <div class="img2 img2-2">
      <img src="${pregunta[r].src2}">
    </div>
    <div class="img3 img3-3">
      <img src="${pregunta[r].src3}">
    </div>
    <div class="img4 img4-4">
      <img src="${pregunta[r].src4}">
    </div>
    <div class="img5 img5-5">
      <img src="${pregunta[r].src5}">
    </div>
  `
  parrafoPreguntaDraggable.textContent = pregunta[r].enunciado
  // img1.setAttribute('src', pregunta[r].src1)
  // img2.setAttribute('src', pregunta[r].src2)
  // img3.setAttribute('src', pregunta[r].src3)
  // img4.setAttribute('src', pregunta[r].src4)
  // img5.setAttribute('src', pregunta[r].src5)

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
const PreguntasAleatoriasHTML = (lenguaje)=>{
      do{
        r=Math.floor(Math.random()*lenguaje.length) 
      } while(orden.indexOf(r)>=0)
      // El "while" en este caso lo uso para validar que la posición random no exista en el array donde estoy guardando el historial de 
      // posiciones ya que si la posición existe, el "do" se repite hasta encontrar una posición que aun no exista en el array historial 
      // random llamado "orden", para garantizar que no se repitan las preguntas.
      orden.push(r)
      elegirPregunta(lenguaje,r)
}

// si el ultimo elemento clickeado corresponde a la respuesta correcta, retorna true, caso contrario false
const ultimoClick = (e,lenguaje)=>{
    // aqui validamos si la iltima opcion clickeada es igual a la respuesta correcta
    if( !(e.target.matches('.btnComprobar')) && !(e.target.matches('#btn-html')) && !(e.target.matches('#btn-css')) && !(e.target.matches('#btn-js'))){
      let elemento = parseInt(e.target.dataset.id) 
      if(elemento === lenguaje[r].respuesta){
        // console.log('respuesta correcta');
        respuCorrecta = true;
      }else{
        // console.log('respuesta incorrecta');
        respuCorrecta = false
      }
  } 
}

// Se toman acciones frente a si la respuesta fue correcta o no
const validarTipoRangeEImg = (e, lenguaje)=>{
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
  
            if(orden.length == lenguaje.length){
              terminarPreguntas()
            }else{
              PreguntasAleatoriasHTML(lenguaje)
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

}

// Se valida y se toman acciones frente a la pregunta de tipo Draggable
const validarTipoDraggable = (e,lenguaje)=>{
  let arrayResp = lenguaje[r].respuesta
  console.log(arrayResp);

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
  
          if(orden.length == lenguaje.length){
            console.log('------------la 6ta pregunta fue mala');
            terminarPreguntas()
          }else{
            PreguntasAleatoriasHTML(lenguaje)
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

// Se pasa a la siguiente pregunta, y si es ultima, se ejecuta la funcion "terminarPreguntas()"
const siguiente = (lenguaje)=>{
  mensajeExito.forEach(mensaje =>{
    mensaje.style.display = 'none'
    })  
    if(orden.length == lenguaje.length){
      terminarPreguntas()
    }else{
      PreguntasAleatoriasHTML(lenguaje)
    }
}

//salir de preguntas y pasar a estadisticas
const terminarPreguntas = ()=>{
  orden = []
  // convinacionRespuestas = []
  preguntasDraggable.style.display = 'none'
  preguntasImg.style.display = 'none'
  preguntasRange.style.display = 'none'
  //para mostrar las respuestas buenas y malas de seccion html
  document.querySelector('.totalRespuestas').textContent = contadorRespuestasBuenas + contadorRespuestasMalas
  document.querySelector('.verde').textContent = contadorRespuestasBuenas
  document.querySelector('.rojo').textContent = contadorRespuestasMalas
  estadisticas.classList.toggle('pintar-ocultar')
  console.log('fin categoría');
  console.log(orden);

  mensajeExito.forEach(mensaje =>{
    mensaje.style.display = 'none'
    })  


  console.log(respuCorrecta);
  console.log(respuDraggableCorrecta);
}

// Toma casi todas las funciones anteriores y les pasa como parametro "lenguaje" la bd con las preguntas según la categoría
const categoriaLenguaje = (e,lenguaje)=>{
      // Se lleva el registro de la ultima opción de respuesta clickeada
      ultimoClick(e,lenguaje)
      // Se valida si la respuesta fue correcta
      validarTipoRangeEImg(e,lenguaje)
  
      if(e.target.matches('.btnComprobar-draggable')){
        ordenRespuestasDraggable()
  
        validarTipoDraggable(e,lenguaje)
      }
  
  
      // Si la respuesta fué buena, habrá aparecido el boton continuar
      if(e.target.matches('.btnContinuar')){
        // se oculta el mensaje de exito y se avanza a la siguiente pregunta
        siguiente(lenguaje)
        // aqui voy a invocar una función que guarde el avance en porcentaje y luego lo use para las barras de progreso
      }

}


