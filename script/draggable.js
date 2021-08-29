export {draggable,ordenRespuestasDraggable,convinacionRespuestas}

const divRespuestas = document.querySelector('.respuestas-draggable')
const convinacionRespuestas = []

const ordenRespuestasDraggable = ()=>{
    const respuestas = document.querySelectorAll('.respuestas-draggable div')

    respuestas.forEach(nodoClases =>{
        const clases = nodoClases.classList[2]
        convinacionRespuestas.push(parseInt(clases))
    })
    console.log(convinacionRespuestas);
}

const draggable = (img1,img2,img3,img4,img5,lenguaje)=>{
    divRespuestas.innerHTML = ""

    document.addEventListener('click', e =>{
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

