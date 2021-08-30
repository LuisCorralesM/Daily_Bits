export {preguntasHTML, preguntasCSS, preguntasJS}

const preguntasHTML = [
  { 
    tipo: 'range',
    enunciado: '¿Qué etiqueta HTML nos sirve para incluir archivos de JavaScript?',
    opcion1: '<br>',
    opcion2: '<script>',
    opcion3: '<style>',
    respuesta: 2
  },
  {
    tipo: 'range',
    enunciado: '¿Qué etiqueta es semánticamente correcta para el contenido principal?',
    opcion1: 'main',
    opcion2: 'section',
    opcion3: 'header',
    respuesta: 1
  },
  {
      tipo: 'range',
      enunciado: '¿Qué significa DRY?',
      opcion1: "Don't repeat yellow",
      opcion2: "Don't repeat yourself",
      opcion3: "Don't recicle year",
      respuesta: 2
  },
  {
      tipo: 'draggable',
      enunciado: 'Organiza la estructura de un documento HTML5',
      src1: "imagenes/icono-doctype.png",
      src2: "imagenes/icono-body.png",
      src3: "imagenes/icono-head.png",
      src4: "imagenes/icono-html-a.png",
      src5: "imagenes/icono-html-c.png",
      respuesta: [1,4,3,2,5]
  }, 
  {
    tipo: 'img',
    enunciado: '¿Cuál es el logo de html?',
    src1: "imagenes/logo-html.png",
    src2: "imagenes/logo-react.png",
    src3: "imagenes/logo-vsc.png",
    src4: "imagenes/logo-github.png",
    fig1: "HTML",
    fig2: "REACT",
    fig3: "VSC",
    fig4: "GITHUB",
    respuesta: 1
  },  
  {
    tipo: 'range',
    enunciado: '¿Para qué se usa la etiqueta <p>?',
    opcion1: "Para un salto de línea",
    opcion2: "Para declara un párrafo",
    opcion3: "Para declarar un título",
    respuesta: 2
},
]

const preguntasCSS = [
  { 
    tipo: 'range',
    enunciado: '¿Qué tipo de selector css representa el caracter . ?',
    opcion1: 'id',
    opcion2: 'class',
    opcion3: 'tag',
    respuesta: 2
  },
  {
    tipo: 'range',
    enunciado: '¿Qué selector representa el caracter # ?',
    opcion1: 'class',
    opcion2: 'tag',
    opcion3: 'id',
    respuesta: 3
  },
  {
      tipo: 'range',
      enunciado: '¿Qué selector tiene mayor jerarquía?',
      opcion1: "tag",
      opcion2: "class",
      opcion3: "id",
      respuesta: 3
  },
  {
      tipo: 'draggable',
      enunciado: 'Organiza la estructura css',
      src1: "imagenes/selector.png",
      src2: "imagenes/valor.png",
      src3: "imagenes/propiedad.png",
      src4: "imagenes/llave-abierta.png",
      src5: "imagenes/llave-cerrada.png",
      respuesta: [1,4,3,2,5]
  },  
  {
    tipo: 'img',
    enunciado: '¿Qué tecnología es un framework de css?',
    src1: "imagenes/logo-bootstrap.png",
    src2: "imagenes/logo-react.png",
    src3: "imagenes/logo-vsc.png",
    src4: "imagenes/logo-github.png",
    fig1: "BOOTSTRAP",
    fig2: "REACT",
    fig3: "VSC",
    fig4: "GITHUB",
    respuesta: 1
  },  
  {
    tipo: 'img',
    enunciado: '¿Cuál es la forma correcta de poner color de fondo al body?',
    src1: "imagenes/color-fondo1.png",
    src2: "imagenes/color-fondo2.png",
    src3: "imagenes/color-fondo3.png",
    src4: "imagenes/color-fondo4.png",
    fig1: "OPCION 1",
    fig2: "OPCION 2",
    fig3: "OPCION 3",
    fig4: "OPCION 4",
    respuesta: 3
  }
]

const preguntasJS = [
  { 
    tipo: 'range',
    enunciado: '¿Qué característica es válida de JavaScript?',
    opcion1: 'Fuerte tipado',
    opcion2: 'Débil tipado',
    opcion3: 'Multi thread',
    respuesta: 2
  },
  {
    tipo: 'range',
    enunciado: '¿Cuál es un método de arrays en JavaScript?',
    opcion1: 'key',
    opcion2: 'value',
    opcion3: 'join',
    respuesta: 3
  },
  {
      tipo: 'range',
      enunciado: '¿Qué método une 2 arrays?',
      opcion1: "every",
      opcion2: "some",
      opcion3: "concat",
      respuesta: 3
  },
  {
      tipo: 'draggable',
      enunciado: 'ordena la sintaxis de un objeto',
      src1: "imagenes/let-const.png",
      src2: "imagenes/value.png",
      src3: "imagenes/key.png",
      src4: "imagenes/llave-abierta.png",
      src5: "imagenes/llave-cerrada.png",
      respuesta: [1,4,3,2,5]
  }, 
  {
    tipo: 'img',
    enunciado: '¿Qué tecnología pertenece al MEVN Stack?',
    src1: "imagenes/logo-angular.png",
    src2: "imagenes/logo-nodeJS.png",
    src3: "imagenes/logo-windows.png",
    src4: "imagenes/logo-linux.png",
    fig1: "ANGULAR",
    fig2: "NODE",
    fig3: "WINDOWS",
    fig4: "LINUX",
    respuesta: 2
  },  
  {
    tipo: 'img',
    enunciado: '¿Cuál es un FrameWork de JavaScript?',
    src1: "imagenes/logo-angular.png",
    src2: "imagenes/logo-nodeJS.png",
    src3: "imagenes/logo-windows.png",
    src4: "imagenes/logo-linux.png",
    fig1: "ANGULAR",
    fig2: "NODE",
    fig3: "WINDOWS",
    fig4: "LINUX",
    respuesta: 1
  } 
]
