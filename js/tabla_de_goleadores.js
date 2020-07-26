var goleadores = jugadores;

goleadores.sort(function(a,b){
   return (b.goles.menoresa+b.goles.menoresb+b.goles.menoresc+b.goles.menoresd+b.goles.copa) - (a.goles.menoresa+a.goles.menoresb+a.goles.menoresc+a.goles.menoresd+a.goles.copa)
});

goleadores.forEach(function(goleador,i){
    $(".list").append(`
    <div class="goleador"> 
            <div class="goleador-posicion">
               <h3>${i+1}</h3>
            </div>
            <div class="goleador-data">
               <div class="rounded-foto">
                     <img src="${goleador.foto.carnet}" alt="${goleador.foto.alt}">
                     <h2>${goleador.apellido}</h2>
                     <h3>${goleador.nombre}</h3>
               </div>
               <div class="goles-partidos">
                        <div> <h2><img src="images/icons/gol-icon.svg" alt="gol"> ${goleador.goles.menoresd+goleador.goles.menoresc+goleador.goles.menoresb+goleador.goles.menoresa+goleador.goles.copa}</h2></div>
                        <h3>${goleador.ganados+goleador.empatados+goleador.perdidos} partidos</h3>
               </div>
               <div class="partidos">
                     <ul class="list-unstyled">
                        <li>Menores B: ${goleador.goles.menoresb}</li>
                        <li>Menores C: ${goleador.goles.menoresc}</li>
                        <li>Menores D: ${goleador.goles.menoresd}</li>
                        <li>Copa: ${goleador.goles.copa}</li>
                        <li>Promedio de gol: ${((goleador.goles.menoresd+goleador.goles.menoresc+goleador.goles.menoresb+goleador.goles.menoresa+goleador.goles.copa)/(goleador.ganados+goleador.empatados+goleador.perdidos)).toFixed(2)}</li>
                     </ul>
               </div>
            </div>
  </div>    
    `)
})

