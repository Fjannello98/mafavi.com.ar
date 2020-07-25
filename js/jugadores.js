var block_jugadores = $("#cards_jugadores");
jugadores.forEach(function(jugador) {
    block_jugadores.append(
` <div class="card">
<img class="card-img" src="${jugador.foto.cancha}" alt="${jugador.foto.alt}">
<div class="card-text">
    <h5>${jugador.posicion}</h5>
    <h3>${jugador.nombre} ${jugador.apellido}</h3>
</div> 
<div class="card-foot">
   <button onclick="Modal(${jugador.camiseta})">Ver perfil</button>
   <h2 class="number">${jugador.camiseta}</h2>
</div>
</div>
<div id="modal_${jugador.camiseta}" class="jugador-modal" data-id="${jugador.camiseta}">
   <div class="modal-header">
        <h3>${jugador.nombre} ${jugador.apellido}</h3>
        <h3>${jugador.camiseta}</h3>
        <h3 onclick="Close(${jugador.camiseta})"><i class="fa fa-window-close" aria-hidden="true"></i></h3>
   </div>
   <div class="modal-body">
       <div class="modal-text">
           <div class="modal-nav">
                 <button id="modal_nav_${jugador.camiseta}_1" class="modal-nav-box modal_nav_${jugador.camiseta} checked"  onclick="Change_tab(${jugador.camiseta},1)"><h5>Perfil</h5></button>
                 <button id="modal_nav_${jugador.camiseta}_2" class="modal-nav-box modal_nav_${jugador.camiseta}"  onclick="Change_tab(${jugador.camiseta},2)"><h5>Momento</h5></button>
           </div>
           <div id="modal_tab_${jugador.camiseta}_1" class="modal-text-1 modal_text_${jugador.camiseta}">
               <ul class="list-unstyled">
                   <li><img src="images/icons/gol-icon.svg" alt="gol"><h5> ${jugador.goles.menoresa+jugador.goles.menoresb+jugador.goles.menoresc+jugador.goles.menoresd+jugador.goles.copa}</h5><img src="images/icons/tarjeta-roja-icon.svg" alt="expulsiones"><h5>  ${jugador.expulsiones}</h5></li>
                   <li><h5>Posición: ${jugador.posicion}</h5></li>
                   <li><h5>Partidos Jugados: ${jugador.ganados+jugador.empatados+jugador.perdidos}</h5></li>
                   <li><h5> Partidos Ganados: ${jugador.ganados}</h5> </li>
                   <li><h5> Partidos Empatados: ${jugador.empatados}</h5> </li>
                   <li><h5> Partidos Perdidos: ${jugador.perdidos} </h5> </li>
                </ul>  
           </div>
           <div id="modal_tab_${jugador.camiseta}_2" class="modal-text-2 modal_text_${jugador.camiseta}">
                 <p><em>${jugador.momento}</em></p>
           </div>    
       </div>
       <div class="modal-foto">
           <img src="${jugador.foto.carnet}">
       </div>
   </div>
   <div class="modal-footer">
       <button onclick="Close(${jugador.camiseta})" class="btn-outline-mafa">Cerrar</button>
   </div>
</div>`)
});

function Modal(nro){
  $(`#modal_${nro}`).show(100);
}
function Close(nro){
 $(`#modal_${nro}`).hide(100);
}

function Change_tab(jugador,tab){
    $(`.modal_nav_${jugador}`).removeClass("checked");
    $(`#modal_nav_${jugador}_${tab}`).addClass("checked");
    $(`.modal_text_${jugador}`).slideUp(200);
    $(`#modal_tab_${jugador}_${tab}`).slideDown(200);
}



var goleadores = jugadores;

goleadores.sort(function(a,b){
   return (b.goles.menoresa+b.goles.menoresb+b.goles.menoresc+b.goles.menoresd+b.goles.copa) - (a.goles.menoresa+a.goles.menoresb+a.goles.menoresc+a.goles.menoresd+a.goles.copa)
})

goleadores.forEach(function(goleador,i){
    $("#goleadores").append(`
    <tr>
       <th scope="row">${i+1}</th>
       <td>${goleador.apellido} </td>
       <td><strong> ${goleador.ganados+goleador.empatados+goleador.perdidos} </strong></td>
       <td><strong> ${goleador.goles.menoresa+goleador.goles.menoresb+goleador.goles.menoresc+goleador.goles.menoresd+goleador.goles.copa} </strong></td>
       <td>${goleador.goles.menoresb}</td>
       <td>${goleador.goles.menoresc}</td>
       <td>${goleador.goles.menoresd}</td>
       <td>${goleador.goles.copa}</td>
       <td>${(goleador.goles.menoresa+goleador.goles.menoresb+goleador.goles.menoresc+goleador.goles.menoresd+goleador.goles.copa)/(goleador.ganados+goleador.empatados+goleador.perdidos)}</td>
    </tr>
    `)
})

