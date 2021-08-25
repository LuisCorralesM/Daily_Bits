export {listarPreguntasHTML}
import { preguntas } from "./bdPraguntas.js"
// Secciones
const 
home = document.querySelector('#home'),
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

// Metodos
const
pintarOcultar = (x,y)=>{
  x.classList.toggle('pintar-ocultar')
  y.classList.toggle('pintar-ocultar')
}

// Listar preguntas para HTML
const listarPreguntasHTML = ()=>{
  let
  orden = [],
  r
  document.addEventListener('click', (e)=>{
    e.preventDefault()
    // Puse la clase btnComprobar en el html a todos los botones de preguntas
    if(e.target.matches('.btnComprobar')){
      do{
        r=Math.floor(Math.random()*preguntas.length)
      } while(orden.indexOf(r)>=0){
        if(preguntas[r].tipo == 'range'){
          parrafoPreguntaRange.textContent = preguntas[r].enunciado
          opcionRespuesta1.textContent = preguntas[r].opcion1
          opcionRespuesta2.textContent = preguntas[r].opcion2
          opcionRespuesta3.textContent = preguntas[r].opcion3  

          preguntasDraggable.style.display = 'none'
          preguntasImg.style.display = 'none'
          preguntasRange.style.display = 'block'
        }
        if(preguntas[r].tipo == 'draggable'){
          parrafoPreguntaDraggable.textContent = preguntas[r].enunciado
          img1.setAttribute('src', preguntas[r].src1)
          img2.setAttribute('src', preguntas[r].src2)
          img3.setAttribute('src', preguntas[r].src3)
          img4.setAttribute('src', preguntas[r].src4)
          img5.setAttribute('src', preguntas[r].src5)

          preguntasDraggable.style.display = 'block'
          preguntasImg.style.display = 'none'
          preguntasRange.style.display = 'none'
        }
        if(preguntas[r].tipo == 'img'){
          parrafoPreguntaImg.textContent = preguntas[r].enunciado
          opcionImg1.setAttribute('src', preguntas[r].src1)
          opcionImg2.setAttribute('src', preguntas[r].src2)
          opcionImg3.setAttribute('src', preguntas[r].src3)
          opcionImg4.setAttribute('src', preguntas[r].src4)

          preguntasDraggable.style.display = 'none'
          preguntasImg.style.display = 'block'
          preguntasRange.style.display = 'none'
        }
        orden.push(r)
        // console.log(preguntas[r]);
        // console.log(orden);
  
          if(orden.length == preguntas.length){
            console.log('fin');
            orden = []
          }  
      }   
    } 
  })

}

// Metodo para regresar al HOME
document.addEventListener('click', (e)=>{
    if(e.target.matches('.regresar')){
        pintarOcultar(preguntasRange,home)
    }
})

