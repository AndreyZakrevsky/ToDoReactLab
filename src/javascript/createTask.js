import {SimpleTask , HomeTask , ProjectTask} from "./Tasks";


const creteTask = (taskInfo , type )=>{
    let newTask = null;
    switch (type){
        case"Simple":  newTask = new SimpleTask(taskInfo);
            break;
        case"Home": newTask = new HomeTask(taskInfo);
            break;
        case"Project": newTask = newTask = new ProjectTask(taskInfo);
            break;
        default: newTask = null;
            break;
    }
    return newTask;
};

export default creteTask;