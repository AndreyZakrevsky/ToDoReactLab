

//ES6
export class SimpleTask {
    constructor({ taskTittle , taskStatus }){
        this.id = Math.floor(Math.random() * (100000- 100)) + 100;
        this.taskTittle = taskTittle || "Not entered ";
        this.taskStatus = taskStatus || "Not entered ";
    }
}

export class HomeTask extends SimpleTask{
    constructor({taskTittle , taskStatus , taskDescription }){
       super({ taskTittle , taskStatus });
       this.taskDescription = taskDescription || "Not entered ";
    }
}

export class ProjectTask extends HomeTask{
    constructor({taskTittle , taskStatus ,taskDescription , taskDeadline}){
       super({ taskTittle , taskStatus , taskDescription });
       this.taskDeadline = taskDeadline || "Not entered ";
    }
}