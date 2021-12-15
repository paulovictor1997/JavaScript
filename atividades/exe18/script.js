let tasks = [];

/*Gerando uma ID*/

const idGeneration = ()=>{
    let timeStamp = new Date();
    
    let id = timeStamp.getHours().toString()+
             timeStamp.getMinutes().toString()+
             timeStamp.getSeconds().toString()+
             timeStamp.getMilliseconds().toString()
        
        return id;
}


const createTask = (taskDescription)=>{
    
    let task = {
        id: idGeneration(),
        data: {
            description:taskDescription
        }
    };

    tasks.push(task);
    
    
}

const deleteTask = (id)=>{
    /*A tasks vai receber um filter só das tarefas do botão que tem que apertar*/
    tasks = tasks.filter(task => task.id != id);
    updateScreen();

}