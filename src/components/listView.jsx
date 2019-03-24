import React from 'react';
import '../scss/listView.scss';

const ListView = ({user , deleteItem})=>{

    let userInfo = user.typeUser.toUpperCase() + ` : `;
        for(let key in user){
            if(key !== "tasks"){
                if(key !== "typeUser"){userInfo += `   ${user[key]} `;}
            }
        }

    return(
        <div className = "elem">
            <div className="taskTitle" >
                <h2>{userInfo}</h2>
            </div>
            <hr/>
            <div className="taskList">
                <ol className="square">
                    {user.tasks.map( (item , i)=>{
                       let str = "";
                         for(let key in item){
                             if(key !== "id"){
                                 str += ` ${key.replace("task", "")} : ${item[key]} `;
                             }
                         }
                       return <li key={i} className="taskElement" >
                           {str} <button className="btnTask" onClick={() => { deleteItem(item.id)}} >Delete Task</button>
                        </li>
                      })
                    }
                </ol>
            </div>
        </div>
    );
};

export default  ListView ;

