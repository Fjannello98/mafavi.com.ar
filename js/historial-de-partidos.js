
partidos.forEach(function(partido,i){
     $(".historial-partidos").append(
        `<div class="card">
                <div class="result">
                    <div class="result-index">${i+1}</div>
                    <img class="escudo" src="${partido.rival.escudo.img}" alt="${partido.rival.escudo.alt}">
                    <h2>${partido.goles_local}-${partido.goles_rival}</h2>
                </div>
                <div class="info">
                    <ul class="list-unstyled">
                        <li>${partido.rival.nombre}</li>
                        <li>${partido.fecha}</li>
                        <li>${partido.categoria}</li>
                    </ul>
                
                    <button class="btn btn-outline-mafa">Ver crónica</button>
                </div>
        
        </div>`


     )

})
