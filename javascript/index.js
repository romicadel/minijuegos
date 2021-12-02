window.onload=function(){
    let h1Elts = document.getElementsByTagName("h1");
    for(let i=0;i<h1Elts.length;i++){
    h1Elts[i].addEventListener("mouseover",cambiarHtml);
    }
}

function cambiarHtml(){ 
    this.innerHTML = "Bienvenido a Minijuegos";
}
//local storage//

/*let arrayDatos = prompt('Ingresa Tu Nombre');
let nombre = arrayDatos;
localStorage.setItem(nombre, apodo);

nombre = localStorage.getItem(nombre);
alert('Bienvenido' + nombre + ' A MiniJuegos');*/



const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
	
	if (document.body.classList.contains('dark')){
		localStorage.setItem('dark', 'true');
	} else {
		localStorage.setItem('dark', 'false');
	}
});

if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
}else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}


$("#boton1").click(() => { 
    $("#contenidoExtra").toggle("fast");
});

$(".button1").css({ "background-color": "#13121200", 
					"color": "black",
                    "font-size": "40px", 
					"font-family": "rampart one",
					"width": "fit-content",
					"margin-bottom": "30px",
					"opacity": "0",
                    "border": "none"
});

$(".button1dark").css({"color": "whitesmoke",
});

$("#boton1").css("opacity", "1")
		.slideUp(2000)
		.delay(2000)
		.slideDown(1000);



//Buscador//
const juegos = [
	{nombre: 'Ta te ti'},
	{nombre: 'Ahorcado'},
	{nombre: 'Flappy Bird'},
]

const formulario = document.querySelector("#formulario");
const boton = document.querySelector("#btn2");
const resultado = document.querySelector('#resultado')

const filtrar = ()=>{
	//console.log(formulario.value);
	resultado.innerHTML = '';

	const texto = formulario.value.toLowerCase();

	for(let juego of juegos){
		let nombre = juego.nombre.toLowerCase();
		if(nombre.indexOf(texto) !== -1){
			resultado.innerHTML +=`
			<li>${juego.nombre}</li>
			`
		}
	}
	if (resultado.innerHTML === ''){
		resultado.innerHTML += `
		<li>Todavia no tenemos ese juego</li>
		`
	}
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)
filtrar();