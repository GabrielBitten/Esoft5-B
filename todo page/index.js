
function criarListaDeTarefas() {
   
    var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    

    var lista = document.getElementById('lista');

   
    lista.innerHTML = '';

 
    tarefas.forEach(function(tarefa) {
        var li = document.createElement('li');
        var h1 = document.createElement('h1');
        var p = document.createElement('p');
        
        h1.textContent = tarefa.titulo;
        p.textContent = tarefa.descricao;

        li.appendChild(h1);
        li.appendChild(p);
        lista.appendChild(li);
    });
}

window.onload = criarListaDeTarefas;


document.getElementById('botao').addEventListener('click', function(){

    let titulo = document.getElementById('titulo').value;
    let descricao = document.getElementById('descricao').value;

   
    if(titulo.trim() !== '' && descricao.trim() !== ''){
      
        var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    
        var tarefa = {
            titulo: titulo,
            descricao: descricao
        };

     
        tarefas.push(tarefa);

        localStorage.setItem("tarefas", JSON.stringify(tarefas));

        document.getElementById('titulo').value = '';
        document.getElementById('descricao').value = '';

     
        criarListaDeTarefas();
    }
});
