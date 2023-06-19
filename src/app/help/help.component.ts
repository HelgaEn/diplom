import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserdataService } from '../userdata.service';
import { RolesService } from '../roles.service';
import { Request } from '../request';
import { PostdataService } from '../postdata.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  user = {
    password: '',
    name: '',
    surname: '',
    email: '',
    role: 'user'
  };

  constructor(private userdata: UserdataService,private rolesService: RolesService, private post: PostdataService) { }
  
  checkUser(){
    var check;
    this.userdata.getUser(this.user.email).subscribe({
      next: (resp)=>{
        check = resp;
        console.log(resp)
        if (check==null)
        this.regUser()
    else
    alert('пользователь с данным email уже существует')
  
      }
    })
  }
  regUser(){

    //if(this.checkUser()){   
    this.userdata.regUser(this.user).subscribe({
      next: (resp)=>{
        console.log(resp);
      }
    })
    this.rolesService.role ='user';
    
  this.volUser(this.user.email)
  }

  request: Request ={
    title:'Заявка на вступление в ряды волонтёров',
    text: 'От зарегестрированного пользователя ',
    author: ''
  }
  emailvol='';
 volUser(email: any){
   
     this.request.author=this.userdata.nowUser.email;
     this.request.text=this.request.text+email;
     this.post.postRequest(this.request).subscribe({
      next: (data)=>{
        alert("ваша заявка отправлена")
      }
    })
    this.emailvol='';
  }

  ngOnInit(): void {
  }

}
