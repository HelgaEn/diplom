import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserdataService } from '../userdata.service';
import { RolesService } from '../roles.service';

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

  constructor(private userdata: UserdataService,private rolesService: RolesService) { }
  
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
    
  this.volUser()
  }

    
  
 volUser(){/* 
     //отправить емейл в таблицу заявок
     this.userdata.setVol(this.user.email).subscribe({})*/
  }

  ngOnInit(): void {
  }

}
