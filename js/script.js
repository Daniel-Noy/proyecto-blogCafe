const heading = document.querySelector('.header__titulo'); //? Obtener un elemento del HTML

const enlaces = document.querySelector('.nav__enlaces');
const listaEnlaces = document.querySelectorAll('.nav__enlace'); //? Obtener varios elementos con la misma clase

const formulario = document.querySelector('.contacto__formulario');
const camposFormulario = document.querySelectorAll('.campo__field');
const btnEnviar = document.querySelector('.campo__boton');

const datos = {
  nombre: '',
  email: '',
  mensaje: ''
}

// listaEnlaces.forEach(enlace => {
//   enlace.href = 'https://www.notion.so/JavaScript-7b523d7b215648e39e429327ef20d208' //? Definir el un atributo a la etiqueta HTML
// })

//? Crear un nuevo elemento html
const nuevoEnlace = document.createElement('A'); 
nuevoEnlace.href = 'index.html';
nuevoEnlace.textContent = 'Nuevo enlace';
nuevoEnlace.classList.add('navegacion__enlace');
enlaces.appendChild(nuevoEnlace);


// Validacion de formulario
formulario.addEventListener('submit', (e)=> {
  e.preventDefault();

  const { nombre, email, mensaje} = datos;

  if(nombre === '' || email === '' || mensaje === '') {
    mostrarMensaje('Todos los campos deben ser obligatorios', 'error')
    return
  }

  mostrarMensaje('Correo enviado correctamente', 'correcto')

})

camposFormulario.forEach((input)=> {
  input.addEventListener('input', leerTexto)
})

// btnEnviar.addEventListener('click', (e)=> {
//   e.preventDefault();
//   console.log('Click al boton');
// })


function leerTexto(e) {
  const input = e.target;
  const ID = input.id;
  const texto = input.value;
  
  datos[ID] = texto
}

function mostrarMensaje (mensaje, tipo) {
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;
  alerta.classList.add('mensaje');
  alerta.classList.add(`mensaje--${tipo}`)

  formulario.appendChild( alerta );

//? El elemento desaparece en 5 segundos
  setTimeout(()=> {
    alerta.remove()
  }, 4000)
}