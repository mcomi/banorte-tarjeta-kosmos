var btnsConfirmarCita = $('.btn-cita')
var panelsCita = $('.panel-fecha-cita')
var panelsOtros = document.getElementsByClassName('panel-fecha-cita')
btnsConfirmarCita.each(function(){
  $(this).click(function(){
    var panelSeleccionado = $(this).closest('.panel-fecha-cita');

    panelsCita.each(function(){
      var panel = $(this)
      if(panel.is(panelSeleccionado)){
        var cita = panel.find('select option:selected').text();
        var clone = panel.clone();
        clone.children('button').html('Cambiar')
        clone.children('button').click(function(){
          $('#cita-seleccionada').html('');
          panelsCita.each(function(){
            $(this).removeClass('hidden');
          })
        })


        clone.children('.input-select-cita').html(cita)
        clone.appendTo('#cita-seleccionada')
        panel.addClass('hidden')
      }else{
        panel.addClass('hidden')
      }
    })
  })
})

var btnsOpcionActivar = $('.btn-activar')
var panelsActivacion = $('.panel-opcion-activacion')
btnsOpcionActivar.each(function(){
  $(this).click(function(){
    var panelSeleccionado = $(this).siblings('.panel-opcion-activacion');
    var clone = panelSeleccionado.parent().clone();
    clone.appendTo('#opcion-activacion-seleccionada')
    clone.children('button').html('Cambiar').click(function(){
      $('#opcion-activacion-seleccionada').html('')
      panelsActivacion.each(function(){
        var panel = $(this)
        panel.removeClass('hidden')
        panel.siblings('.btn-activar').removeClass('hidden')

      })
    })
    panelsActivacion.each(function(){
      var panel = $(this)
      panel.addClass('hidden')
      panel.siblings('.btn-activar').addClass('hidden')

    })
  })
})
