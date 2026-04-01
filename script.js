const form = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa")
const lista = document.getElementById("lista-tarefas")

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

//Renderizar tarefas

function renderizarTarefas(){
    lista.innerHTML = "";

    tarefas.forEach((tarefa,index)=>{
        const li = document.createElement("li");
        li.innerHTML = `
        ${tarefa}
        <button class="remover" onclick="removerTarefa(${index})">X</button>
        `;

        lista.appendChild(li)
    });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

//adicionar tarefa

form.addEventListener("submit", function(e){
    e.preventDefault();

    const novaTarefa = input.value;

    if(novaTarefa.trim() === "") return;

    tarefas.push(novaTarefa);
    input.value= "";

    renderizarTarefas();
})

//remover tarefa
function removerTarefa(index){
    tarefas.splice(index,1);
    renderizarTarefas();
}

//Inicializar
renderizarTarefas();