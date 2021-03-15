const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = []

registrosAddEventListener();
function registrosAddEventListener () {
    // al hacer click a 'agregar al carrito'
    listaCursos.addEventListener( 'click', agregarCurso)


}

// Funciones 

function agregarCurso (e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito') ){
    // retrocedo al padre
        const cursoSeleccionado = e.target.parentElement.parentElement;
        infoDatosCurso(cursoSeleccionado);
    }
};

function infoDatosCurso (curso) {
    // console.log(curso)
    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    };

    // agregar elementos al carrito
    articulosCarrito = [...articulosCarrito, infoCurso]; 

    console.log(articulosCarrito)

    carritoHTML();
}

// Carrito HTML

function carritoHTML () {
// limpiar HTML
     limpiarHTML();

// recorre carrito y genera HTML
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio,cantidad, id} = curso
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src=${imagen} width='90'></td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
          <a href='#' class='borrar-curso' data-id=${id}> X </a>
        </td>
        `;



        // agregar HTML en tbody
        contenedorCarrito.appendChild(row);
    })
}

// Elimina cursos de TBody

function limpiarHTML () {
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
};