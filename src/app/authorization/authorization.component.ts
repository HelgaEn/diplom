import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { UserdataService } from '../userdata.service';



@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

   
  user = {
    login: '',
    password: null,
  };

  constructor(public rolesService: RolesService, public router: Router, private userdata: UserdataService) { }

  ngOnInit(): void {
  }

  check=0;

  checkError(){
    if(this.check){
      console.log("error");//исправить на alert
      return true;
    }
    else{
      return false;
    }
  }

  servpass='';

  checkUser(){
    
   /* if (this.user.login == this.userid.login && this.user.password == this.userid.password)
    { 
      this.data.getData(this.user.login,this.user.password);
      this.rolesService.role ="user";
    
    }
    else if(this.user.login==this.admid.login && this.user.password == this.admid.password)
    {
      this.data.getData(this.user.login,this.user.password);
      this.rolesService.role="admin";
      
    }
    else 
    { 
      this.check=1;
    }*/
    
    this.userdata.getUser(this.user.login).subscribe({next:(data:any) => {
      this.servpass = data.password
      // сохранить данные в стор
      this.userdata.newUser=data;
      this.rolesService.role=data.role;
      console.log(data.password)
      if(this.user.password == this.servpass)
    {

      return this.router.navigateByUrl('/profile')
    }
    else
    {
      console.log('not pass');
      return this.user.password=null;
    }
    }
  })

    
    console.log(this.servpass)

  return this.goUser()
  }

  goUser(){
    
  }

}
