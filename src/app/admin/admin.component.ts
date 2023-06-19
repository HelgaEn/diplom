import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../postdata.service';
import { UserdataService } from '../userdata.service';
import { Animal } from '../animal';
import { News } from '../news';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { User
 } from '../user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private animal: PostdataService, private userdata: UserdataService, private router: Router) { }

  inputAnimal: Animal={
    id: '',
    type: '',
    name: '',
    age: '',
    image: '',
    description: ''
  };
  inputNews: News={
    title: '',
    text: ''
  }

  user = {
    password: '',
    name: '',
    surname: '',
    email: '',
    role: 'user'
  };
  userEdit: User={
    password: '',
    name: '',
    surname: '',
    email: '',
    role: ''  
  }
  
  users: User[]=[];
  tusers: User[]=[];
 // constructor(public getpost: GetpostdataService, private router: Router) { }
posts: Animal[]=[];
tposts: Animal[]=[];

  ngOnInit(): void {
   // this.getpost.getData() 
   this.userdata.getUsers().subscribe({next:(data:any) => {
    this.users.push(data); 
    
    let key
    for(key in Object.values(this.users[0])){
    
      this.tusers.push({
        name: Object.values(this.users[0])[key].name,
        surname: Object.values(this.users[0])[key].surname,
        email: Object.values(this.users[0])[key].email,
        role:Object.values(this.users[0])[key].role,
        password:Object.values(this.users[0])[key].password
      })
    }
    
  }});

  this.animal.postData().subscribe({next:(data:any) => {
    this.posts.push(data); 
    let key
    for(key in Object.values(this.posts[0])){
      this.tposts.push({
        id: Object.keys(this.posts[0])[key],
        name: Object.values(this.posts[0])[key].name,
        type: Object.values(this.posts[0])[key].type,
        age: Object.values(this.posts[0])[key].age,
        image:Object.values(this.posts[0])[key].image,
        description: Object.values(this.posts[0])[key].description
      })
    }
    
  }});
  }
display=0;


  open(user: any){
    this.display=1;
    this.userEdit=user
  }
  findHome(animal: any){
//console.log(animal.id)
this.animal.postHome(animal).subscribe({
  next: (resp)=>{
    alert('информация о подопечном перемещена в архив');
  }
})
this.animal.postHomeDelete(animal.id).subscribe({})
  }
  deleteAnimal(animal: any){
    this.animal.postHomeDelete(animal.id).subscribe({})
  }

  editUser(){
    this.userdata.updateUser(this.userEdit).subscribe({
      next: (resp)=>{
        alert('изменено');//тут переделать в алерт об успешной операции
      }
    })
    if (this.volAnimal){
      this.setVol(this.userEdit)
    }
  }
 
  newAnimal(){
    this.animal.postanimal(this.inputAnimal).subscribe({
      next: (resp)=>{
        alert('запись сделана');//тут переделать в алерт об успешной операции
      }
    })
  }
  newNews(){
    this.animal.newsData(this.inputNews).subscribe({
      next: (resp)=>{
        alert('запись сделана');
        this.inputNews={
          title: '',
          text: ''
        }//тут переделать в алерт об успешной операции
      }
    });

  }

  volAnimal: any;
  setVol(user: any){
    var userId=user.email.replace(/[\s.,@]/g, '');
    this.animal.volUser(userId, this.volAnimal).subscribe({});

  }
}
