export {PreguntasAleatoriasHTML,categoriaLenguaje,draggable}

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
opcionImg4 = document.querySelector('.opcion-img4 img'),
figcaption1 = document.querySelector('.fig1'),
figcaption2 = document.querySelector('.fig2'),
figcaption3 = document.querySelector('.fig3'),
figcaption4 = document.querySelector('.fig4')

// Contenedor donde se muestras las opciones seleccionadas en la pregunta tipo draggable
const divRespuestas = document.querySelector('.respuestas-draggable')
let convinacionRespuestas = []


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

  figcaption1.textContent = pregunta[r].fig1
  figcaption2.textContent = pregunta[r].fig2
  figcaption3.textContent = pregunta[r].fig3
  figcaption4.textContent = pregunta[r].fig4

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
    console.log('un click en el btn comprobar');
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
          console.log('vidas ' +vidas);
          
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

// Imprime las opciones seleccionadas por el usuario en su orden correspondiente
const draggable = (lenguaje)=>{
  //img1,img2,img3,img4,img5,

  divRespuestas.innerHTML = ""

  document.addEventListener('click', e =>{
      const
      img1 = document.querySelector('.img1 img'),
      img2 = document.querySelector('.img2 img'),
      img3 = document.querySelector('.img3 img'),
      img4 = document.querySelector('.img4 img'),
      img5 = document.querySelector('.img5 img')
      // console.log(lenguaje);
      // console.log(lenguaje[3]);
      // console.log(lenguaje[3].src1);

      if(e.target.matches('.img1-1 img')){
          img1.style.display = 'none'
          divRespuestas.insertAdjacentHTML('beforeend', `
          <div class="img1 deshabilitar1 1">
              <img src="${lenguaje[3].src1}">
          </div>
          `)
          document.querySelector('.deshabilitar1').classList.remove('img1-1')
      }
      if(e.target.matches('.img2-2 img')){
          img2.style.display = 'none'
          divRespuestas.insertAdjacentHTML('beforeend', `
          <div class="img2 deshabilitar2 2">
              <img src="${lenguaje[3].src2}">
          </div>
          `)
          document.querySelector('.deshabilitar2').classList.remove('img2-2')
      }
      if(e.target.matches('.img3-3 img')){
          img3.style.display = 'none'
          divRespuestas.insertAdjacentHTML('beforeend', `
          <div class="img3 deshabilitar3 3">
              <img src="${lenguaje[3].src3}" >
          </div>
          `)
          document.querySelector('.deshabilitar3').classList.remove('img3-3')
      }
      if(e.target.matches('.img4-4 img')){
          img4.style.display = 'none'
          divRespuestas.insertAdjacentHTML('beforeend', `
          <div class="img4 deshabilitar4 4">
              <img src="${lenguaje[3].src4}" >
          </div>
          `)
          document.querySelector('.deshabilitar4').classList.remove('img4-4')
      }
      if(e.target.matches('.img5-5 img')){
          img5.style.display = 'none'
          divRespuestas.insertAdjacentHTML('beforeend', `
          <div class="img5 deshabilitar5 5">
              <img src="${lenguaje[3].src5}" >
          </div>
          `)
          document.querySelector('.deshabilitar5').classList.remove('img5-5')
      }
  })
}

// optiene la el orden de las respuestas seleccionadas por el usuario en la catagoria de preguntas tipo draggable
const ordenRespuestasDraggable = ()=>{
  const respuestas = document.querySelectorAll('.respuestas-draggable div')

  respuestas.forEach(nodoClases =>{
      const clases = nodoClases.classList[2]
      convinacionRespuestas.push(parseInt(clases))
  })
  console.log(convinacionRespuestas);
}
// Se valida y se toman acciones frente a la pregunta de tipo Draggable
const validarTipoDraggable = (lenguaje)=>{
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
    console.log('vidas ' + vidas);

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
  convinacionRespuestas = []
  preguntasDraggable.style.display = 'none'
  preguntasImg.style.display = 'none'
  preguntasRange.style.display = 'none'
  //para mostrar las respuestas buenas y malas de seccion html
  document.querySelector('.totalRespuestas').textContent = contadorRespuestasBuenas + contadorRespuestasMalas
  document.querySelector('.verde').textContent = contadorRespuestasBuenas
  document.querySelector('.rojo').textContent = contadorRespuestasMalas
  estadisticas.classList.toggle('pintar-ocultar')
  console.log('fin categoría');

}

// Toma casi todas las funciones anteriores y les pasa como parametro "lenguaje" la bd con las preguntas según la categoría
const categoriaLenguaje = (e,lenguaje)=>{
      // Se lleva el registro de la ultima opción de respuesta clickeada
      ultimoClick(e,lenguaje)
      // Se valida si la respuesta fue correcta
      validarTipoRangeEImg(e,lenguaje)
  
      if(e.target.matches('.btnComprobar-draggable')){
        console.log('un click en el btn comprobar tipo draggable');
        ordenRespuestasDraggable()
  
        validarTipoDraggable(lenguaje)
      }
  
  
      // Si la respuesta fué buena, habrá aparecido el boton continuar
      if(e.target.matches('.btnContinuar')){
        console.log('aqui viene la otra pregunta');

        // se oculta el mensaje de exito y se avanza a la siguiente pregunta
        siguiente(lenguaje)
        // aqui voy a invocar una función que guarde el avance en porcentaje y luego lo use para las barras de progreso
      }

}


