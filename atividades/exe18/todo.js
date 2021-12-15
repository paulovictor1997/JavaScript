const newTask = ()=>{
    let taskDescription = document.getElementById('newTask').value;
    
    createTask(taskDescription);


    updateScreen();
}

//Função para ir atualizando à tela
const updateScreen = ()=>{
    let list = '<ul>'
    tasks.forEach((task=>{
        list+= `<li id-data = ${task.id}>${task.data.description}</li>`;
        list += `<button onclick=removeTask(this) id-data = ${task.id}>Feito</button>`
    }));

    list += '</ul>';

    document.getElementById('list').innerHTML = list;
    document.getElementById('newTask').value = '';
}

const removeTask = (element)=>{
    /*A tasks vai receber um filter só das tarefas do botão que tem que apertar*/
    let id = element.getAttribute('id-data');
    deleteTask(id);
    updateScreen();

}