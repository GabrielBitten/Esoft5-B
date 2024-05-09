document.getElementById('botao').addEventListener('click', function(){

    let titulo = document.getElementById('titulo').value;
    let descricao = document.getElementById('descricao').value;

    if(titulo.trim() !== '' && descricao.trim() !== ''){
        var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];


        var tarefa = {
            titulo: titulo,
            descricao: descricao
        };
        tarefas.push(tarefa)

        var tarefasJSON = JSON.stringify(tarefas);

        localStorage.setItem("tarefas", tarefasJSON);

        document.getElementById('titulo').value = '';
        document.getElementById('descricao').value = '';
  
    }
});

