import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { RolesService } from './roles.service';



@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  
    newUser: User=
    {name: '',
    surname: '',
    email: '',
    password: '',
    role: 'user',
    image: ''};

    nowUser: User=
    {name:  localStorage.getItem('name'),
    surname: localStorage.getItem('surname'),
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password'),
    role: localStorage.getItem('role'),
    image: localStorage.getItem('image')};

 str=this.newUser.email;

  regUser(user: User){

    this.newUser=user;
     let userId: any;
    userId =user.email;
    userId = userId.replace(/[^a-zа-яё]/gi, '');

   //return this.http.post('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/user.json',
   return this.http.patch('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/user.json', {[userId]:user});

  }

  getUser(login: string){
  login = login.replace(/[^a-zа-яё]/gi, '');
  return this.http.get('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/user/'+login+'.json');

}
setVol(email: string){
  return this.http.post('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/zayavki.json', email)
}


}
