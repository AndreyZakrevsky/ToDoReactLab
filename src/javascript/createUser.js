import {User ,Student , Developer} from "./User";



const creteUser = (dataUser )=>{
     let newUser = null;
     switch (dataUser.typeUser){
        case"user": newUser = new User(dataUser );
            break;
        case"student": newUser = new Student(dataUser);
            break;
        case"developer": newUser = new Developer(dataUser);
            break;
        default: newUser = null;
            break;
     }
     return newUser;
};

export default creteUser;

