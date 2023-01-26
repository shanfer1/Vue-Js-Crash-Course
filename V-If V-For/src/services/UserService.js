import axios from "axios";
export class UserService{
    static users=[];
      static getAllUsers(){
        let dataURL='https://jsonplaceholder.typicode.com/users';

        return axios.get(dataURL);
      }
} 