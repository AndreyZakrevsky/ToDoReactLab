import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import '../scss/main.scss';
import createUser from "../javascript/createUser";
import createTask from "../javascript/createTask";
import ListView from './listView';

class Main extends Component {
constructor(){
    super();
    this.state = {
        userInfo:null,
        taskInfo:null,
        user:null,
        taskType:"",
        name:true,
        surname:true,
        specInput:true,
        jobInput: true,
        tabSimple: true,
        tabHome: true,
        tabProject: true
    };
      this.handleChangeType = this.handleChangeType.bind(this);
      this.addTask = this.addTask.bind(this);
      this.recUserInfo = this.recUserInfo.bind(this);
      this.recTaskInfo = this.recTaskInfo.bind(this);
      this.deleteTask = this.deleteTask.bind(this);
      this.addUser= this.addUser.bind(this);
}

//Selects the user type and opens the corresponding fields.
handleChangeType(event){
    let search = event.target.value;
    switch (search) {
        case"user":this.setState({name:false , surname:false , specInput:true , jobInput:true });
            break;
        case"student":this.setState({name:false ,surname:false ,specInput:false , jobInput:true });
            break;
        case"developer":this.setState({name:false ,surname:false ,specInput:false,jobInput:false });
            break;
        default:this.setState({name:true ,surname:true ,specInput:true,jobInput:true ,userInfo:null,
            tabSimple:true , tabHome:true , tabProject:true});
            break
    }
    this.setState({userInfo:  {...this.state.userInfo ,typeUser:search} });
}

//Creates a new user and writes it to the state.
addUser(){
    if(this.state.userInfo !== null){
        let newUser = createUser(this.state.userInfo);
        switch (newUser.typeUser) {
            case"user":this.setState({tabSimple:false , tabHome:true , tabProject:true });
                break;
            case"student":this.setState({tabSimple:false , tabHome:false , tabProject:true });
                break;
            case"developer":this.setState({tabSimple:false , tabHome:false , tabProject:false });
                break;
            default:this.setState({tabSimple:true , tabHome:true , tabProject:true, userInfo:null});
                break
        }
        this.setState({user: newUser });
    }else{
        alert("Enter the values!!");
    }
    let clearFealds = document.querySelectorAll(".inputField");
    clearFealds.forEach((item)=>item.value = ""  );
}

//Collects information about the user and writes it to the state
recUserInfo(event){
    let field = event.target.name;
    let value = event.target.value;
    this.setState({userInfo:  {...this.state.userInfo ,[field]:value} });
}

//Collects information about the task and writes it to the state
recTaskInfo(event){
    let typeTask = event.currentTarget.dataset.task;
    let field = event.target.name;
    let value = event.target.value;
        if(typeTask !== "undefined"){
            this.setState({taskType:typeTask });
        }
    this.setState({taskInfo:  {...this.state.taskInfo ,[field]:value} });
}

//Creates a new task and appends it to the user.
addTask(){
     let tamp =this.state.user;
     if(this.state.taskInfo !== null){
         let task = createTask(this.state.taskInfo , this.state.taskType );
         tamp.addTask(task);
         this.setState({user : tamp , taskInfo: null});
     }else{
         alert("Enter the values or new values!!!");
     }

    let clearFealds = document.querySelectorAll(".inpTab");
    clearFealds.forEach((item)=>item.value = ""  );
}

// Deletes the task.
deleteTask(id){
    let tamp = this.state.user;
    tamp.removeTask(id);
    this.setState({user : tamp});
}

render() {
    return (
        <div className="main">
          <div className="header">
              <h1 className="title">Welkome to Todo list...</h1>
          </div>
          <div className="container">
             <div className="leftField">
                 <h1>Create user</h1>
                 <div className="select">
                     <select name="typeUser" className="select_type" onChange={this.handleChangeType} >
                         <option value="#">Select type of user</option>
                         <option value="user">User</option>
                         <option value="student">Student</option>
                         <option value="developer">Developer</option>
                     </select>
                     <input id="Zakr" name="name" className="inputField" type="text" placeholder="Name" disabled={this.state.name}
                            onChange={this.recUserInfo}/>
                     <input name="surname" className="inputField" type="text" placeholder="Surname" disabled={this.state.surname}
                            onChange={this.recUserInfo}/>
                     <input name="specialization" className="inputField" type="text" placeholder="Specialization" disabled={this.state.specInput}
                            onChange={this.recUserInfo}/>
                     <input name="jobtitle" className="inputField" type="text" placeholder="Job title" disabled={this.state.jobInput}
                            onChange={this.recUserInfo}/>
                 </div>
                   <button className="btn" onClick={this.addUser}>Create User</button>
             </div>
             <div className="rightField">
                 <h1>Create task</h1>
                 <div>
                     <Tabs>
                         <TabList >
                             <Tab disabled={this.state.tabSimple}><h4 className="tab">Simple Task</h4></Tab>
                             <Tab disabled={this.state.tabHome}><h4 className="tab">Home Task</h4></Tab>
                             <Tab disabled={this.state.tabProject}><h4 className="tab">Project Task</h4></Tab>
                         </TabList>
                         <TabPanel>
                             <div className="dataTask">
                                 <input className="inpTab" disabled={this.state.tabSimple} name="taskTittle" data-task ="Simple"  type="text" placeholder="Title" onChange={this.recTaskInfo}/>
                                 <input className="inpTab" disabled={this.state.tabSimple} name="taskStatus" data-task ="Simple" type="text" placeholder="Status" onChange={this.recTaskInfo}/>
                             </div>
                         </TabPanel>
                         <TabPanel>
                             <div className="dataTask">
                                 <input className="inpTab" name="taskTittle" data-task ="Home" type="text"  placeholder="Title" onChange={this.recTaskInfo}/>
                                 <input className="inpTab" name="taskStatus" data-task ="Home" type="text" placeholder="Status" onChange={this.recTaskInfo}/>
                                 <textarea className="inpTab" name="taskDescription" data-task ="Home" onChange={this.recTaskInfo}></textarea>

                             </div>
                         </TabPanel>
                         <TabPanel>
                             <div className="dataTask">
                                 <input className="inpTab" name="taskTittle" data-task ="Project" type="text"  placeholder="Title" onChange={this.recTaskInfo}/>
                                 <input className="inpTab" name="taskStatus" data-task ="Project"  type="text" placeholder="Status" onChange={this.recTaskInfo}/>
                                 <input className="inpTab"  name="taskDeadline" data-task ="Project"  type="date" placeholder="Deadline" onChange={this.recTaskInfo}/>
                                 <textarea className="inpTab" name="taskDescription"  data-task ="Project"  onChange={this.recTaskInfo}></textarea>
                             </div>
                         </TabPanel>
                     </Tabs>
                 </div>
                       <button className="btn" onClick={this.addTask}>Add task</button>
             </div>
        </div>
            <div>
                {
                    ( this.state.user !== null && (this.state.user.tasks.length > 0) )
                          && <ListView user={this.state.user} deleteItem ={this.deleteTask}/>
                }
            </div>
            <footer className="footer">
                <p>© 2018 Zakrevsky A. All rights reserved <a href="https://www.intita.com">www.intita.com</a></p>
            </footer>
     </div>
    );
  }
}

export default Main;
