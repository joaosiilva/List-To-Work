let input = document.getElementById("input-principal")
let button = document.getElementById("botao-adicionar")
let tarefa = document.getElementById("nome-tarefa-id")
let listacompleta = document.getElementById("tarefas")
let arrayDeTarefas = []

recarregarTarefas()

function mostrarTarefas() {
    let novali = ""
    arrayDeTarefas.forEach((tarefa, index) => {

        novali = novali +
            `<li class="item-tarefa ${tarefa.concluida == true ? 'concluido' : ""}">
            <button class="botao-foguete" onclick="concluirTarefa(${index})">
                <i class="fas fa-rocket"></i>
                    </button>
                        <p class="nome=tarefa ${tarefa.concluida == true ? 'concluido' : ""}" id="nome-tarefa-id">${tarefa.tarefa} </p>
                    <button class="botao-delete" onclick="deletarTarefa(${index})">
                <i class="fas fa-trash"></i>
            </button>
        </li>`

    })
    listacompleta.innerHTML = novali

    localStorage.setItem("lista", JSON.stringify(arrayDeTarefas))
}

function deletarTarefa(index) {
    arrayDeTarefas.splice(index, 1)

    mostrarTarefas()
}

function adicionarTarefa() {
    arrayDeTarefas.push({
        tarefa: input.value,
        status: false

    })



    mostrarTarefas()
}

function concluirTarefa(index) {
    arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida

    mostrarTarefas()
}

function recarregarTarefas() {
    let minhasTarefas = localStorage.getItem("lista")

    arrayDeTarefas = JSON.parse(minhasTarefas)

    mostrarTarefas()
}

button.addEventListener("click", adicionarTarefa)
