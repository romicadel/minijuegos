

let turno = 0;
const tablero = [];

const btnPulsado = (e, pos) => {
    turno ++; 
    const btn = e.target;
    const color = turno % 2 ? 'purple' : 'yellow';
    btn.style.backgroundColor =  color;
    tablero[pos] = color;
    if(haGanado())alert('Felicidades '+ color);
}

const haGanado = () => {
    if (tablero[1] == tablero[2] && tablero[1] == tablero[3] && tablero[1]){
        return true;
    }else if(tablero[4] == tablero[5] && tablero[4] == tablero[6] && tablero[4]) {
        return true;
    }else if(tablero[7] == tablero[8] && tablero[7] == tablero[9] && tablero[7]) {
        return true;
    }else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) {
        return true;
    }else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) {
        return true;
    }else if(tablero[3] == tablero[6] && tablero[3] == tablero[9] && tablero[3]) {
        return true;
    }else if(tablero[1] == tablero[5] && tablero[1] == tablero[9] && tablero[1]) {
        return true;
    }else if(tablero[3] == tablero[5] && tablero[3] == tablero[7] && tablero[3]) {
        return true;
    }else{
        return false;
    }
}

document.querySelectorAll('button').forEach(
    (obj, i) => obj.addEventListener ('click', (e) => btnPulsado (e,i))
);

btnPulsado.addEventListener('click', () => {
    $("tablero").reset();
})

//$("#reset").click(function();})

//JSON

const guardarLocal = (valor) => { localStorage.setItem(valor)}

for (const tablero of tablero ){
    guardarLocal(producto.id, JSON.stringify(tablero))
}
guardarLocal("tablero", JSON.stringify(tablero))

/*document.getElementById("reset").onclick = btnPulsado () {
    color.parentNode.removeChild();
    haGanado();
};
/*restartButton.addEventListener('click', borrarTablero);*/

/*let container1 = document.getElementsByClassName("button").onclick = reset;

/*const volverJugar = () => {
    let btnPulsado = document.getElementById('reset')
    document.color.removeChild
}*/

/*let container1 = document.getElementById("tablero").reset();*/