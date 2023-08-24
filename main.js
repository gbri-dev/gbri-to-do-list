$(document).ready(function() {

  $('form').on('submit', function(e){
    e.preventDefault();
    const novaTarefa = $('#tarefa').val();
    let listaTarefas = $('<li title="click no item para conclui-lo"></li>');
    listaTarefas.text(novaTarefa);
    $(listaTarefas).appendTo('ul');
    $('#tarefa').val('')
  });

  $('ul').on('click', 'li', function() {
    $(this).css('text-decoration', 'line-through');
  });

});
