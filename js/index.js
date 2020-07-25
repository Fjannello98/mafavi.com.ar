$(document).ready(
    $(".opacity-div").slideDown(800)
);





var index_cards=[
    {
        title:"MaFaVi es de la A",
        text:'En un partidazo contra CdC, se concretó el tercer ascenso consecutivo de categoría, abriendo paso hacia Menores A. Los goles llegaron en el segundo tiempo, una pelota que cazó <a href="mafavi/html/jugadores.html">Bitxo</a> en el área abría el partido. <a href="mafavi/html/jugadores.html">Acqua</a> en el final liquidaba la historia tras una gran jugada colectiva.',
        foto:{
            img:"images/mafamilia.jpeg",
            alt:"Foto de equipo y amigos en el ascenso a Menores A"
        },
        data:1,

    },
    {
      title:"El camino a la B",
      text:'En el arranque del complemento, <a href="mafavi/html/jugadores.html">Bitxo</a>, desafiaría la física. El nro9 sacó un bombazo al arco directo sacando del medio que se estamparía contra la red de un distraído guardameta."¿Vale?"',
      foto:{
          img:"images/el_camino_a_la_b.jpg",
          alt:"Festejo de gol de Tenco a Segundo Semestre"
      },
      data:2,

  },
  {
      title:'"C" nos dió',
      text:'En la última bola a contrareloj, se mandó al área un <a href="mafavi/html/jugadores.html">Facu</a> plagado de desesperación. Gol en la última y delirio. Nació el "A lo MaFa"... ',
      foto:{
          img:"images/c_nos_dio.jpg",
          alt:"Festejo del equipo en el ascenso a Menores C"
      },
      data:3,

  },

];


index_cards.forEach(function(card){
  $("#index-cards").append(
     `  <div class="index_card" data-text="${card.data}">
             <img class="index_card_img" src="${card.foto.img}" alt="${card.foto.alt}" data-text="${card.data}">
              <div class="text index-card-${card.data}">
                                 <h2>${card.title}</h2>
                                  <p>${card.text}</p>
              </div>
        <div class="foot">
            <button class="btn-outline-white index_card_btn" data-text="${card.data}"> <a>Ver más &raquo;</a></button>
         </div>

</div>`
  )
});




var goleadores_index = goleadores.splice(0,5);
goleadores_index.forEach(function(goleador){
    $("#goleadores_index").append(
        `<li>${goleador.nombre} ${goleador.apellido}  -  ${goleador.goles.menoresa+goleador.goles.menoresb+goleador.goles.menoresc+goleador.goles.menoresd+goleador.goles.copa} <span class="fa fa-soccer-ball-o"></span>  </li>`
    )
})