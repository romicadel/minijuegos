/*const URLGET = ""
$("body").prepend('<button id="btn1">Get</button>');
$('#btn1').click(() => {
    $.get(URLGET, function (respuesta, estado));
    
})*/

const URLGET = "data/jugadores.json";
$("#api").prepend('<button id="btn1" class="button">Top Jugadores</button>');

$("#btn1").click(() => { 
    $.getJSON(URLGET, function (respuesta) {
        console.log('respuesta', respuesta);
        let datos = respuesta;
        for (const jugador of datos) {
            $("#api").prepend(`<div>
                <h3>${jugador.idJugador} - ${jugador.jugador}</h3>
                </div>`
            )
        }  
    })
})



