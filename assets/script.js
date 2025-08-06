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
//função apagar tarefa
function apagar(index) {
  tarefas.splice(index, 1);
  render()
}
//mostrar na tela
function render() {
  const ul = document.querySelector("ul");
  ul.innerHTML = null;
  tarefas.forEach(function (tarefa, index) {
    const li = document.createElement("li");
    li.innerText = tarefa;    



    //criando checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
     
    //criando botão de apagar
    const botao = document.createElement("button");
    botao.id = "apagar"
    botao.innerHTML = '<img src="lixeira.png" width="15" height="15"/>' ;
    botao.onclick = () => apagar(index);
    li.appendChild(botao);
    
    ul.appendChild(li);
  });
}


//iniciar
render();
