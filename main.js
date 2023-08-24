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
  
   
  // Função copiar lista de tarefa para àrea de transferência
  let btnCopiar = $("#btnCopiar");

  let lista = $("#lista");

  btnCopiar.on("click", copiarLista);

  function copiarLista() {  

    // Cria um elemento textarea invisível      
    let textarea = $("<textarea></textarea>");      
    textarea.css("position", "absolute");     
    textarea.css("left", "-9999px");
    
    // Insere o texto da lista no textarea, separando cada item por uma quebra de linha      
    let texto = ""; 
    
    lista.children().each(function() {    texto += $(this).text() + "\n";  }); 
    
    textarea.val(texto);
    
    // Adiciona o textarea ao documento usando o método append      
    $("body").append(textarea);
    
    // Seleciona o texto do textarea usando o método     
    let textToCopy = textarea.select();
    
    // Copia o texto para a área de transferência usando o método execCommand      
    //document.execCommand("copy");
    navigator.clipboard.writeText(textToCopy.val()).then(function() {
      alert('A lista foi copiada para a área de transferência. ' + textToCopy.val());
    }).catch(function(error) {
      alert.error('Erro ao copiar texto: ', error);
    });
      
    textarea.remove();                  
  }
});