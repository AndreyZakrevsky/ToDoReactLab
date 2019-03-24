

export class User{
    constructor({name, surname , typeUser}){
        this.name = name || "Not entered ";
        this.surname= surname || "Not entered ";
        this.typeUser = typeUser;
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task);
    }

    removeTask(id){
        this.tasks = this.tasks.filter(el => el.id !== id);
    }
}

export class Student extends User{
    constructor({name, surname , typeUser,  specialization}){
        super({name , typeUser , surname});
        this.specialization = specialization || "Not entered ";
    }
}

export class Developer extends Student{
    constructor({name, surname , typeUser,  specialization , jobtitle}){
        super({name, surname , typeUser , specialization });
        this.jobtitle = jobtitle || "Not entered ";
    }
}

