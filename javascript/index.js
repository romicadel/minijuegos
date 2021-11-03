window.onload=function(){
    let h1Elts = document.getElementsByTagName("h1");
    for(let i=0;i<h1Elts.length;i++){
    h1Elts[i].addEventListener("mouseover",cambiarHtml);
    }
}

function cambiarHtml(){ 
    this.innerHTML = "Bienvenido a Minijuegos";
}