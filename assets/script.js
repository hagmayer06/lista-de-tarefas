//estado da aplicação//
const tarefas = ["1 tarefa", "2 tarefa", "3 tarefa"];
//alteradore de estado
function add() {
  const input = document.querySelector("input");
  const tarefa = input.value;
  tarefas.push(tarefa);
  input.value = "";
  render();
}
//mostrar na tela
function render() {
  const ul = document.querySelector("ul");
  ul.innerHTML = null;
  tarefas.forEach(function (tarefa) {
    const li = document.createElement("li");
    li.innerText = tarefa;
    ul.appendChild(li);
  });
}
//iniciar
render();
