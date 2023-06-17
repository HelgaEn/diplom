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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public rolesService: RolesService, public router: Router, private http: HttpClient,private userdata: UserdataService) { }

  user: User = {
    password: '',
    name: '',
    surname: '',
    email: '',
    role: 'user'
  };

  //str=idgenerate()
  //this.user.id=str;

  regUser(){
    
    this.userdata.regUser(this.user).subscribe({
      next: (resp)=>{
        console.log(resp);
      }
    })
    this.rolesService.role ='user';
    return this.router.navigateByUrl('/auth')
   }

  ngOnInit(): void {
  }

}
