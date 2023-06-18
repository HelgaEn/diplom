import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RolesService } from '../roles.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from '../userdata.service';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public rolesService: RolesService, public router: Router, private http: HttpClient,private userdata: UserdataService) { }

 // user: User = {
  user = {
    password: '',
    name: '',
    surname: '',
    email: '',
    role: 'user'
  };

  //str=idgenerate()
  //this.user.id=str;

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
    return this.router.navigateByUrl('/auth')
   /*}
   //else
   {
   return alert('пользователь с данным email уже существует')
  }*/
  }

  ngOnInit(): void {
  }

}
