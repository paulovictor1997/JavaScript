//Mudança de tema
const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element,style)=>{
    window.getComputedStyle(element).getPropertyValue(style);
}

//Pegando o estilo do CSS
const initialColors = {
    bg: getStyle(html,'--bg'),
    bgPanel: getStyle(html,'--bg-panel'),
    colorHeadings:getStyle(html, '--color-headings'),
    colorText: getStyle(html, '--color-text')
}

const darkMode = {
    bg: '#333333',
    bgPanel:'#434343', 
    colorHeadings: '#3664FF',
    colorText:'#B5B585'
}

//Função para transformar mudar de maiúsculo para o "-$1". (em minúsculo)
const transformKey = key => 
"--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

//Mudar a função padrão
const changeColors = (colors)=>{
    //Com a função, ele irá procurar a chave key
    Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}

checkbox.addEventListener('change',({target})=>{
    target.checked ? changeColors(darkMode) : changeColors(initialColors); 
});


//Salvando localmente às mudanças de tema
const isExistLocalStorage = (key) => 
  localStorage.getItem(key) != null

const createOrEditLocalStorage = (key, value) => 
  localStorage.setItem(key, JSON.stringify(value))

const getValeuLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key))

checkbox.addEventListener("change", ({target}) => {
  if (target.checked) {
    changeColors(darkMode) 
    createOrEditLocalStorage('modo','darkMode')
  } else {
    changeColors(initialColors)
    createOrEditLocalStorage('modo','initialColors')
  }
})

if(!isExistLocalStorage('modo'))
  createOrEditLocalStorage('modo', 'initialColors')


if (getValeuLocalStorage('modo') === "initialColors") {
  checkbox.removeAttribute('checked')
  changeColors(initialColors);
} else {
  checkbox.setAttribute('checked', "")
  changeColors(darkMode);
}

//----------------------
/*Área do Todo List
  
Seleção do DOM
*/

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector('.filter-todo');

//Eventos executados
//----------------------------------------------------
//Esse evento é usado na adição local.
document.addEventListener('DOMContentLoaded',getTodos);
//----------------------------------------------------
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// Funções
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Lista
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value
    todoLi.classList.add('todo-item');
    todoDiv.appendChild(todoLi)
    // Botão de tarefa concluída
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton)

    saveLocal(todoInput.value);
    // Botão de tarefa deletada
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)

    todoInput.value = '';
} 

//Função que vai servir para dizer que 
//a tarefa foi feita e depois deletada. 
function deleteCheck(e) {
    console.log(e.target)

    const item = e.target
    const todo = item.parentElement
    
    if(item.classList[0] === 'trash-btn') {
        todo.classList.add('fall')
        //removeLocalTodos(todo);
        removeLocalStorage(todo);
        todo.addEventListener('transitionend', () => {
            todo.remove()

        })
    }

    if(item.classList[0] === 'complete-btn'){
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    
    todos.forEach( (todo) => {

        switch(e.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    } )
}

//Salvando localmente
function saveLocal(todo){
    
    let todos;

    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    } else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
   
    todos.forEach(function(todo){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const todoLi = document.createElement('li');
        todoLi.innerText = todo;
        todoDiv.appendChild(todoLi);

        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>'
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton)
    
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton)
    
        todoList.appendChild(todoDiv)
    
    })
} 

function removeLocalStorage(todo){
    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];
    } else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    //children - me retorna uma coleção
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos',JSON.stringify(todos))

}