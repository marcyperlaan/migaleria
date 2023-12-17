const visor = document.querySelector(".visor");
const fila = document.querySelectorAll(".triangleup");
const anios = document.querySelectorAll(".anio");
const nGalerias = 5; //cuadno tengas más galerías, tendrás que aumentar este número.
// de manera que el desplazamiento será posición * (100/nGalerias)

function cambiarGaleria(posicion) {
      let desplazamiento = posicion*(-100/nGalerias);
      visor.style.transform = 'translateX('+desplazamiento+'%)';
      //quitar la clase activo al li correspondiente

      for(var i = fila.length - 1; i>= 0; i--){
            fila[i].classList.remove('activo');
      }

      //añadir la clase activo al nuevo li
      fila[posicion].classList.add('activo');

      for(var i = anios.length - 1; i>= 0; i--){
            anios[i].classList.remove('activo');
      }
      //añadir la clase activo al nuevo li
      anios[posicion].classList.add('activo');
      anios[posicion+1].classList.add('activo');
      }

// Get the image element by its ID
const image = document.getElementById('r2');

// Add a click event listener
image.addEventListener('click', () => {
  // Apply the transformation on click (e.g., rotate 360 degrees)
  image.style.transform = 'rotate(360deg)';
});

var textos= ["TATTOO ART:<br>This section is a gateway for transforming skin into living canvases of art. Each piece is a testament to his dedication to pushing the boundaries of this unique form of self-expression.",
      "FINE ART:<br>Explore Marc' s Fine Art collection, a curated blend of traditional works of art that pay homage to the heritage of artistic craftsmanship. Discover his passion for anatomy, merging classical techniques with a modern perspective.",
      "DIGITAL ART:<br>Within this space, you can explore innovative digital creations that blend classical perspectives with a fusion of technology and imagination. These works transport you to otherworldly landscapes and delve into thought-provoking concepts. Dive into the pixels and uncover boundless possibilities."];


var redirecciones = [
    "tattoo.html",
    "fineart.html",
    "digital.html"
];

var estadoRectangulos = [false, false, false]; // Inicialmente, todos los rectángulos están en estado "no clicado"

function cambiarTextoYRedirigir(seccion) {
   
}


function aplicarEstilosMenu(seccion) {
            const elementosMenu = document.querySelectorAll('.menuPrincipal a');
            elementosMenu.forEach(elemento => {
                elemento.style.backgroundColor = 'transparent';
                elemento.style.color = '#333';
            });
            
            const enlaceSeccion = document.getElementById('e' + seccion);
            enlaceSeccion.style.backgroundColor = '#666';
            enlaceSeccion.style.color = 'white';
        }

function cambiarTextoYRedirigir(seccion) {
    // Verifica si el rectángulo ya fue clicado
    if (estadoRectangulos[seccion - 1]) {
        // Si ya fue clicado, redirige a la página correspondiente
        window.location.href = redirecciones[seccion - 1];
    } else {
        // Si no ha sido clicado, cambia el texto en el footer
        document.getElementById('textoFooter').innerHTML = textos[seccion - 1];
        // Cambia el color del texto en el footer según el rectángulo
        document.getElementById('textoFooter').style.color = getColorForRectangulo(seccion);
        // Marca el rectángulo como clicado
        estadoRectangulos[seccion - 1] = true;
        aplicarEstilosMenu(seccion);
    }
}

// Esta función devuelve el color correspondiente para el texto del footer según el rectángulo
function getColorForRectangulo(seccion) {
    if (seccion === 1) {
        return 'rgba(0, 0, 255, 0.95)'; // Azul con 90% de opacidad
    } else if (seccion === 2) {
        return 'rgba(255, 0, 0, 0.95)'; // Rojo con 90% de opacidad
    } else if (seccion === 3) {
        return 'rgba(0, 128, 0, 0.95)'; // Verde con 90% de opacidad
    }
    return 'rgba(0, 0, 0, 0.95)'; // Color predeterminado con 90% de opacidad
}


function aplicarHover(seccion) {
    document.getElementById('r' + seccion).style.opacity = 1;
    document.getElementById('e' + seccion).style.backgroundColor = '#666';
    document.getElementById('e' + seccion).style.color = 'white';
    document.getElementById('e' + seccion).style.boxShadow = '0px 0px 5px rgba(0, 0, 0, 0.5)'; // Añade una sombra
    document.getElementById('textoFooter').innerHTML = textos[seccion - 1];
}

function quitarHover(seccion) {
       document.getElementById('r'+seccion).style.opacity=0.3;
      document.getElementById('e'+seccion).style.backgroundColor='whitesmoke';
      document.getElementById('e'+seccion).style.color='#333';
       document.getElementById('e' + seccion).style.boxShadow = 'none'; // Quita la sombra al quitar el hover
       document.getElementById('textoFooter').innerHTML= textos[0];
     }
//const boton = document.querySelector(".iconoHamburquesa");
//const nav = document.querySelector(".menuPrincipal");

 function mostrarOcultarMenu(){
       document.querySelector(".menuPrincipal").classList.toggle('activo');
}

// Obtener elementos del DOM
    const nav = document.querySelector('.menuPrincipal');
    const iconoHamburguesa = document.getElementById('ih');

    var fondoAnimado = document.getElementById('fondo'); // Reemplaza 'fondo' con el ID correcto de tu elemento si es diferente


    // Agregar un manejador de eventos al botón hamburguesa
    iconoHamburguesa.addEventListener('click', () => {
        nav.classList.toggle('activo'); // Alternar la clase 'activo' en el menú de navegación
        fondoAnimado.style.opacity = nav.classList.contains('activo') ? '1' : '0'; // Mostrar u ocultar el fondo animado
    });









