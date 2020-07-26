
var results = [
        { 
          class:"jugados",
          name:"Jugados",
          order:1,
          variable:"partidos"
        },
        { 
            class:"ganados",
            name:"Ganados",
            order:2,
            variable:"partidos_ganados"

        },
        { 
            class:"empatados",
            name:"Empatados",
            order:3,
            variable:"partidos_empatados"
        },
        { 
            class:"perdidos",
            name:"Perdidos",
            order:4,
            variable:"partidos_perdidos"
        },  

]


results.forEach(function(result){
    $(".estadisticas-partidos").append(`
    <div class="partidos-card">
            <h2>${result.name}</h2>
            <h3 id="${result.class}" class="${result.class}" onclick="Show_partidos(${result.order})"></h3>
            <div id="modal_${result.order}" class="modal modal-${result.class}">
                <div class="modal-header"><h2>Partidos ${result.name}</h2><i class="fa fa-close" aria-hidden="true"></i></div>
                <div class="modal-table">
                    <table>
                        <thead>
                                <tr>
                                <th scope="col">Torneo</th>
                                <th scope="col">Rival</th>
                                <th scope="col">Resultado</th>
                                </tr>
                        </thead>
                        <tbody  id="tbody_${result.variable}"></tbody>
                    </table>
                </div>
            </div>
    </div>
    
    `)
})







$("#jugados").append(`${partidos.length}`);
$("#ganados").append(`${partidos_ganados.length}`);
$("#empatados").append(`${partidos_empatados.length}`);
$("#perdidos").append(`${partidos_perdidos.length}`);

Asignar_partidos_tablas(partidos,"partidos");
Asignar_partidos_tablas(partidos_ganados,"partidos_ganados");
Asignar_partidos_tablas(partidos_empatados,"partidos_empatados");
Asignar_partidos_tablas(partidos_perdidos,"partidos_perdidos");

function Asignar_partidos_tablas (resultados,variable){
    resultados.forEach(function(partido){
        $(`#tbody_${variable}`).append(`
                   <tr>  
                     <td>${partido.categoria}</td>
                     <td>${partido.rival.nombre}</td>
                     <td>${partido.goles_local}-${partido.goles_rival}</td>    
                   </tr>                        
        `)
    })
}

function Show_partidos(resultados){
    $(".modal").hide();
    $(`#modal_${resultados}`).toggle();
}

$("i").click(function(event){
    $(".modal").hide()
})


var ganados_cancha1= []
var empatados_cancha1= [];
var perdidos_cancha1=[];
var ganados_cancha2= []
var empatados_cancha2= [];
var perdidos_cancha2=[];
var ganados_cancha3= []
var empatados_cancha3= [];
var perdidos_cancha3=[];


partidos_ganados.forEach(function(game){
      switch (game.cancha){
          case 1:
             ganados_cancha1.push(game);
             break;
          case 2: 
             ganados_cancha2.push(game);
             break;
          case 3:
             ganados_cancha3.push(game);
             break;       
      }

});
partidos_empatados.forEach(function(game){
    switch (game.cancha){
        case 1:
           empatados_cancha1.push(game);
           break;
        case 2: 
           empatados_cancha2.push(game);
           break;
        case 3:
           empatados_cancha3.push(game);
           break;       
    }

})
partidos_perdidos.forEach(function(game){
    switch (game.cancha){
        case 1:
           perdidos_cancha1.push(game);
           break;
        case 2: 
           perdidos_cancha2.push(game);
           break;
        case 3:
           perdidos_cancha3.push(game);
           break;       
    }

})

function Get_rate(jugados,ganados,empatados){
    return (ganados.length*3 + empatados.length)*100 /(jugados.length*3)
}

function Get_goles(games,variable){
    var gamesstr = JSON.stringify(games);
    let data = JSON.parse(gamesstr);
    let goles_local= 0;
    let goles_visitante =0;
     //Recorriendo el objeto
     for(let x in data){
        goles_local += data[x].goles_local;//Ahora que es un objeto javascript, tiene propiedades
        goles_visitante += data[x].goles_rival;
    }
    if (variable == "l"){
        return goles_local;
    } else {
        return goles_visitante
    }
}

$(".estadisticas-cancha").append(`

    <div id="cancha-1" class="cancha"><h2>Cancha 1</h2> 
            <div class="cancha-results-card">  
                  <div class="cancha-result-list jugados"><h3>${partidos_cancha1.length}</h3></div>
                  <div class="cancha-result-list ganados"><h3>${ganados_cancha1.length}</h3></div>
                  <div class="cancha-result-list empatados"><h3>${empatados_cancha1.length}</h3></div>
                  <div class="cancha-result-list perdidos"><h3>${perdidos_cancha1.length}</h3></div>
                  <div class=" cancha-result-list rate"><h3 class="text-white">${Get_rate(partidos_cancha1,ganados_cancha1,empatados_cancha1).toFixed(1)}% <span>Rate</span> </h3></div>
                  <div class=" cancha-result-list goles"><h3>${Get_goles(partidos_cancha1,"l")} <img src="images/icons/gol-icon.svg" alt="gol" width="30px" height="30px"></h3></div>
                  <div class="cancha-result-list goles"><h3>${Get_goles(partidos_cancha1,"v")} <img src="images/icons/autogol-icon.svg" alt="gol" width="30px" height="30px"></h3></div>  
             </div>    
    </div> 
    <div id="cancha-2" class="cancha"><h2>Cancha 2</h2> 
            <div class="cancha-results-card">  
                    <div class="cancha-result-list jugados"><h3>${partidos_cancha2.length}</h3></div>
                    <div class="cancha-result-list ganados"><h3>${ganados_cancha2.length}</h3></div>
                    <div class="cancha-result-list empatados"><h3>${empatados_cancha2.length}</h3></div>
                    <div class="cancha-result-list perdidos"><h3>${perdidos_cancha2.length}</h3></div>
                    <div class=" cancha-result-list rate"><h3 class="text-white">${Get_rate(partidos_cancha2,ganados_cancha2,empatados_cancha2).toFixed(1)}% <span>Rate</span> </h3></div>
                    <div class=" cancha-result-list goles"><h3>${Get_goles(partidos_cancha2,"l")} <img src="images/icons/gol-icon.svg" alt="gol" width="30px" height="30px"></h3></div>
                    <div class="cancha-result-list goles"><h3>${Get_goles(partidos_cancha2,"v")} <img src="images/icons/autogol-icon.svg" alt="gol" width="30px" height="30px"></h3></div>  
           </div>     
    </div> 
    <div id="cancha-3" class="cancha"><h2>Cancha 3</h2> 
           <div class="cancha-results-card">  
                    <div class="cancha-result-list jugados"><h3>${partidos_cancha3.length}</h3></div>
                    <div class="cancha-result-list ganados"><h3>${ganados_cancha3.length}</h3></div>
                    <div class="cancha-result-list empatados"><h3>${empatados_cancha3.length}</h3></div>
                    <div class="cancha-result-list perdidos"><h3>${perdidos_cancha3.length}</h3></div>
                    <div class=" cancha-result-list rate"><h3 class="text-white">${Get_rate(partidos_cancha3,ganados_cancha3,empatados_cancha3).toFixed(1)}% <span>Rate</span> </h3></div>
                    <div class=" cancha-result-list goles"><h3>${Get_goles(partidos_cancha3,"l")} <img src="images/icons/gol-icon.svg" alt="gol" width="30px" height="30px"></h3></div>
                    <div class="cancha-result-list goles"><h3>${Get_goles(partidos_cancha3,"v")} <img src="images/icons/autogol-icon.svg" alt="gol" width="30px" height="30px"></h3></div>  
            </div> 
    </div> 
`);


var max_jugados = jugadores;
max_jugados.sort(function(a,b){
    return (b.ganados+b.empatados+b.perdidos) - (a.ganados+a.empatados+a.perdidos)
})
max_jugados=max_jugados.splice(0,1);

var max_goleador = jugadores;
max_goleador.sort(function(a,b){
    return (b.goles.menoresa+b.goles.menoresb+b.goles.menoresc+b.goles.menoresd+b.goles.copa) - (a.goles.menoresa+a.goles.menoresb+a.goles.menoresc+a.goles.menoresd+a.goles.copa)
})
max_goleador=max_goleador.splice(0,1);

console.log(max_goleador)

max_goleador.forEach(function(goleador){
    $(".estadisticas-cards").append(               
        `<div class="card">
              <div class="card-foto">
                <img src="${goleador.foto.carnet}" alt="${goleador.foto.alt}">
              </div>
              <div class="card-foot">
                   <div class="title"><h2>Máximo goleador</h2></div>
                   <h3>${goleador.nombre} ${goleador.apellido}</h2>
                   <h3>${goleador.goles.menoresa+goleador.goles.menoresb+goleador.goles.menoresc+goleador.goles.menoresd+goleador.goles.copa} goles</h3> 
                   <button class="btn-outline-mafa"><a href="html/tabla-de-goleadores.html">Ver tabla</a></button>    
              </div>
          </div>`);
});
max_jugados.forEach(function(jugador){
    $(".estadisticas-cards").append(               
        `
        <div class="card">
                <div class="card-foto">
                <img src="${jugador.foto.carnet}" alt="${jugador.foto.alt}">
                </div>
                <div class="card-foot">
                        <div class="title"><h2>Más partidos</h2></div>
                        <h3>${jugador.nombre} ${jugador.apellido}</h2>
                        <h3>${jugador.ganados+jugador.empatados+jugador.perdidos} jugados</h3> 
                        <button class="btn-outline-mafa"><a href="html/tabla-de-goleadores.html">Ver tabla</a></button>  
                </div>
        </div>
    `);   
})  


