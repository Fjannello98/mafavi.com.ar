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
       <td>${((goleador.goles.menoresa+goleador.goles.menoresb+goleador.goles.menoresc+goleador.goles.menoresd+goleador.goles.copa)/(goleador.ganados+goleador.empatados+goleador.perdidos)).toFixed(3)}</td>
    </tr>
    `)
})

