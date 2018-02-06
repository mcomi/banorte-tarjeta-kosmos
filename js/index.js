
var actividad = ''
var ingreso = ''

$('.category').click(function() {
    if($(this).data('category-actividad') != undefined){
      actividad = $(this).data('category-actividad');
      var clone = $(this).clone();
      clone.appendTo('#eleccion-actividad');
      $('#eleccion-actividad .category').addClass('active');
      $('#que-hacer').addClass('hidden');
      var minusSymbol = $('#eleccion-actividad .category').find('.remove-symbol');
      minusSymbol.removeClass('hidden');
      minusSymbol.click(function(){
        $('#eleccion-actividad').html('')
        actividad = ''
        $('#que-hacer').removeClass('hidden').animate2('bounceInLeft');
        if(!$('#opciones-filtradas').hasClass('hidden')){
          $('#opciones-filtradas').addClass('hidden')
        }
      })
      if(!$('#eleccion-ingreso .category').length){
        $('#cuanto-ganas').removeClass('hidden');
        $('#cuanto-ganas').animate2('bounceInLeft');
      }
      if(actividad != '' && ingreso != ''){
        $('#icono-elimina-ambos').removeClass('hidden');
        revisaPropuestas(actividad, ingreso);
      }else {
        if(!$('#opciones-filtradas').hasClass('hidden')){
          $('#opciones-filtradas').addClass('hidden')

        }
      }
    }
    if($(this).data('category-ingreso') != undefined){
      ingreso = $(this).data('category-ingreso');
      var clone = $(this).clone();
      clone.appendTo('#eleccion-ingreso')
      $('#eleccion-ingreso .category').addClass('active');
      $('#cuanto-ganas').addClass('hidden').animate2('fadeOutDown');
      var minusSymbol = $('#eleccion-ingreso .category').find('.remove-symbol');
      minusSymbol.removeClass('hidden');
      minusSymbol.click(function(){
        $('#eleccion-ingreso').html('')
        ingreso = ''
        $('#cuanto-ganas').removeClass('hidden').animate2('bounceInLeft');
        $('#icono-elimina-ambos').addClass('hidden');
        if(!$('#opciones-filtradas').hasClass('hidden')){
          $('#opciones-filtradas').addClass('hidden');
        }
      })
      if(actividad != '' && ingreso != ''){
        $('#icono-elimina-ambos').removeClass('hidden');
        revisaPropuestas(actividad, ingreso);
      }else {
        if(!$('#opciones-filtradas').hasClass('hidden')){
          $('#opciones-filtradas').addClass('hidden').animate2('fadeOutDown');
        }
      }
    }

});

function revisaPropuestas() {
  $('#opciones-filtradas').removeClass('hidden')
  $('#opciones-filtradas').animate2('bounceInLeft');
}

$('#icono-elimina-ambos').click(function(){
  actividad = '';
  ingreso = '';
  $('#eleccion-ingreso').html('')
  $('#eleccion-actividad').html('')
  $('#que-hacer').removeClass('hidden').animate2('bounceInLeft');
  $('#icono-elimina-ambos').addClass('hidden');
  $('#opciones-filtradas').addClass('hidden');
});

$('#btn-solicita-credito-fixed').click(function(){
  $('html, body').animate({ scrollTop: $('#cotizador').offset().top }, 'slow');
})

//Navigation Menu Slider
$('#nav-expander').on('click', function(e) {
  e.preventDefault();
  $('body').toggleClass('nav-expanded');
});
$('.open-menu i').on('click', function(e) {
  e.preventDefault();
  $('body').toggleClass('nav-expanded');
});
$('#nav-close').on('click', function(e) {
  e.preventDefault();
  $('body').removeClass('nav-expanded');
});

// Initialize navgoco with default options
$(".main-menu").navgoco({
  caret: '<span class="caret"></span>',
  accordion: false,
  openClass: 'open',
  save: true,
  cookie: {
    name: 'navgoco',
    expires: false,
    path: '/'
  },
  slide: {
    duration: 300,
    easing: 'swing'
  }
});

$(function() {
  $('img.svg').each(function() {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = $(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, else we gonna set it if we can.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });
});

// modal folio
var olvideFolioLink = document.getElementById('olvide-folio-link');
var tituloModal = document.getElementById('modal-folio-titulo');
olvideFolioLink.addEventListener('click', function(){
  tituloModal.innerHTML = 'Folio olvidado';
  document.getElementById('ingresa-folio').classList.add('hidden');
  document.getElementById('olvide-folio').classList.remove('hidden');
})

document.getElementById('btn-solicita-sms').addEventListener('click', function(){
var numCelular = document.getElementById('cel').value;
  //solicitaFolioSms()
  console.log(numCelular);

  document.getElementById('olvide-folio').classList.add('hidden');
  document.getElementById('input-sms-code').classList.remove('hidden');
})

// Quote Carousel
$('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
