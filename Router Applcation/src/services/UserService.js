import axios from "axios";
export class UserService{
    static users=[];
      static getAllUsers(){
        let dataURL='https://jsonplaceholder.typicode.com/users';

        return axios.get(dataURL);
      }
      static getUser(userId){
        
        let dataURL='https://jsonplaceholder.typicode.com/users/'+userId;
        console.log(dataURL)

        return axios.get(dataURL);
      }
}   