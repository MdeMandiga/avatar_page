//plugins
AOS.init();
//funciones
//traductor
let contenidoTraducido = document.getElementById('contenidoTraduccion')
let boton = document.getElementById('traductor')
$('document').ready(function(){
    $.ajax({
        url: 'ingles.html',
        type: 'get',
        success: function(respuesta){
            contenidoTraducido.innerHTML = respuesta
        },
        error: function(){
            console.log('No carga el archivo');
        }
    })

    $('#traductor').click(function(){
        $(this).toggleClass('idioma');

        if(boton.getAttribute('class','idioma')){
            $.get({
                url: 'espanol.html',
                success: function(respuesta){
                    contenidoTraducido.innerHTML = respuesta
                    boton.innerText = 'Traducir'
                }
            })
        } else {
            $.get({
                url: 'ingles.html',
                success: function(respuesta){
                    contenidoTraducido.innerHTML = respuesta
                    boton.innerText = 'Translate'
                }
            })
        }
    });
});
//mover titulos
$(document).ready(function () {
    $('#abajo').click(function () {
        let titulo1 = $('#tituloUno')
        let titulo2 = $('#tituloDos')
        let titulo3 = $('#tituloTres')
        let carro1 = $('#img1')
        let carro2 = $('#img2')
        let carro3 = $('#img3')
        titulo1.before(carro1)
        titulo2.before(carro2)
        titulo3.before(carro3)



        $('titulo1').before($('#img3'))




    })
});

/*//offcanvas en 1
const miVentanaEmergente = document.getElementById('saludando')
// agregar observador 

miVentanaEmergente.addEventListener('show.bs.offcanva', function(event){
        

    let boton = event.relatedTarget // etiquetado relacionado al evento 


    let mensaje = boton.getAttribute('data-titulo')
    
    
    document.getElementById('offcanvasScrollingLabel').innerText = mensaje

})
*/