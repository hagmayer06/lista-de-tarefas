//estado da aplicação//
const tarefas = ["1 tarefa", "2 tarefa", "3 tarefa"];

//alteradore de estado
function add() {
  const input = document.querySelector("#input-add");
  const tarefa = input.value;
  tarefas.push(tarefa); 
  input.value = "";
  render();
 
}
//função apagar tarefa
function apagar(index) {
  tarefas.splice(index, 1);
  render();
}
//mostrar na tela
function render() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
  tarefas.forEach(function (tarefa, index) {
    const li = document.createElement("li");
    li.innerText = tarefa;

    // Cria o container para checkbox e botões
    const actions = document.createElement("span");
    actions.className = "actions";

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    actions.appendChild(checkbox);

    
    // Botão apagar
    const botao = document.createElement("button");
    botao.id = "apagar";
    botao.innerHTML = '<img src="lixeira.png" width="15" height="15"/>';
    botao.onclick = () => apagar(index);
    actions.appendChild(botao);
    
    
    // Botão editar
    const editar = document.createElement("button");
    editar.innerHTML = '<img src="caneta.png" width="15" height="15"/>'; // Use um ícone ou texto
    editar.onclick = () => editarTarefa(index, li, tarefa);
    actions.appendChild(editar);


    // Adiciona o container ao li
    li.innerText = tarefa;
    li.appendChild(actions);

    ul.appendChild(li);
  });
}

// Função para editar tarefa
function editarTarefa(index, li, tarefaAntiga) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = tarefaAntiga;
  input.className = "editar-input";
  input.placeholder = "ola"; // texto que aparece dentro do input
  input.onblur = salvar;
  input.onkeydown = function(e) {
    if (e.key === "Enter") salvar();
  };
  li.innerText = ""; // Limpa o li
  li.appendChild(input);
  input.focus();

  function salvar() {
    tarefas[index] = input.value;
    render();
  }
}

//iniciar
render();
