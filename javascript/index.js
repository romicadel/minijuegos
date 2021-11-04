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
    
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}
