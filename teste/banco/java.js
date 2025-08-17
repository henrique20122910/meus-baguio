function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!";
    let inputTarefa = document.getElementById("inputtarefa");
    console.log(inputTarefa); // Corrigido o nome da variável (era inputtarefa)

    let tarefa = inputTarefa.value;
    document.getElementById("mensagem").textContent = mensagem;

    let lista = document.getElementById("tarefa");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;

    lista.appendChild(novaTarefa);

    inputTarefa.value = ""; // Limpa o campo de entrada após adicionar
}