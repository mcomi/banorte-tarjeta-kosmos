var btnsConfirmarCita = $('.btn-cita')
var panelsCita = $('.panel-fecha-cita')
var panelsOtros = document.getElementsByClassName('panel-fecha-cita')
btnsConfirmarCita.each(function(){
  $(this).click(function(){
    var panelSeleccionado = $(this).closest('.panel-fecha-cita');
    panelsCita.each(function(){
      var panel = $(this)
      if(panel.is(panelSeleccionado)){
        console.log(panelSeleccionado)
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
    panelsActivacion.each(function(){
      var panel = $(this)
      if(panel.is(panelSeleccionado)){
        console.log(panelSeleccionado)
      }else{
        panel.addClass('hidden')
        panel.siblings('.btn-activar').addClass('hidden')
      }
    })
  })
})
