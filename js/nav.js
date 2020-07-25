var baseref = $("base").attr("href");
$(document).ready(    
    $("#nav").append(`  <div id="menu">  
    <div id="slide-menu">
         <button class="menu-responsive-btn close"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
          <nav>  
               <ul id="menu-responsive" class="lista">
                    <li><a href="index.html"><span class="fa fa-home"></span> Home </a></li>
                    <li><a href="html/jugadores.html"><span class="fa fa-soccer-ball-o"></span> Jugadores </a></li>
                    <li><a href="html/estadisticas.html"><span class="fa fa-bar-chart"></span> Estadísticas</a> <i class="list_toggle1 fa fa-angle-right" data-list="estadisticas_responsive"></i>
                         <ul class="submenu submenu_estadisticas_responsive">
                              <li><a href="html/estadisticas.html">General</a></li>
                              <li>goleadores</li>
                              <li>partidos</li>
                         </ul>
                     </li>
                    <li><span class="fa fa-book"></span> Historia <i  class="list_toggle2 fa fa-angle-right" data-list="historia_responsive"></i>
                          <ul class="submenu submenu_historia_responsive">
                            <li>Ascenso a la A</li>
                            <li>Ascenso a la B</li>
                            <li>Ascenso a la C</li>
                            <li>Color</li>
                            <li>Explicámelo</li>
                          </ul>
                    </li>
                </ul> 
          </nav>      
    </div>
    <button class="menu-responsive-btn open"><i class="fa fa-bars" aria-hidden="true"></i></button>
    <a href="index.html"><img class="nav-logo" src="images/icons/page-logo.png"> </a>
    <div id="top-menu">
        <nav>
            <ul id="menu-pc" class="lista">
                  <li><a href="index.html"><span class="fa fa-home"></span> Home </a></li>
                  <li><a href="html/jugadores.html"><span class="fa fa-soccer-ball-o"></span> Jugadores </a></li>
                  <li><a href="html/estadisticas.html"><span class="fa fa-bar-chart"></span> Estadísticas</a> <i class="list_toggle1 fa fa-angle-right" data-list="estadisticas"></i>
                        <ul class="submenu submenu_estadisticas">
                           <li><a href="html/estadisticas.html">General</a></li>
                           <li>Tabla de goleadores</li>
                           <li>Historial de partidos</li>
                       </ul>
                  </li>
                  <li><span class="fa fa-book"></span> Historia <i  class="list_toggle2 fa fa-angle-right" data-list="historia"></i>
                       <ul class="submenu submenu_historia">
                           <li>Ascenso a la A</li>
                           <li>Ascenso a la B</li>
                           <li>Ascenso a la C</li>
                           <li>Color</li>
                           <li>Explicámelo</li>
                       </ul>
                  </li>
             </ul>  
         </nav>      
    </div>     
</div>`)
)

$(".menu-responsive-btn").click(function(){
    $("#slide-menu").toggle(300)
});

var clicks1 = 0;
$(".list_toggle1").click(function(event){
 clicks1 ++  
 $(event.target).animate(    
   { deg: 90 },
   {duration: 200,
   step: function(now) {
     $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }
   } );
 if (clicks1%2 == 0){
  $(event.target).animate(    
  { deg: 0 },
  {duration: 200,
  step: function(now) {
       $(this).css({ transform: 'rotate(' + now + 'deg)' });
  }
  }
 );
 }
 var list = $(event.target).data("list");
 $(`.submenu_${list}`).slideToggle(200);
});

var clicks2 = 0;
$(".list_toggle2").click(function(event){
 clicks2 ++  
 $(event.target).animate(    
   { deg: 90 },
   {duration: 200,
   step: function(now) {
     $(this).css({ transform: 'rotate(' + now + 'deg)' });
    }
   } );
 if (clicks2%2 == 0){
  $(event.target).animate(    
  { deg: 0 },
  {duration: 200,
  step: function(now) {
       $(this).css({ transform: 'rotate(' + now + 'deg)' });
  }
  }
 );
 }
 var list = $(event.target).data("list");
 $(`.submenu_${list}`).slideToggle(200);
});