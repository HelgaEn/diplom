import { Component } from '@angular/core';
import { RolesService } from './roles.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Router,
  UrlTree,
} from '@angular/router';
import { UserdataService } from './userdata.service';
import { PostdataService } from './postdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public rolesService: RolesService, public router: Router, public userData: UserdataService, private test2: PostdataService){}
  title = 'Главная';

  //user: any;
  /*tuser=this.store.select(AuthState.getUserInfo).subscribe({
    next: (value)=>{
      this.user=value.name;
    }
  });*/
  user= localStorage.getItem('name');
 
 res: any;
  resetUser(){
    
    
    localStorage.clear();
    
    setTimeout(
      function(){
        location.reload()//костыль
      },10
    );
    return this.router.navigateByUrl('/')
    
    
  }
  getUser(){
   /* this.test2.postanimal().subscribe({
      next: (resp:any)=>{
        console.log(resp);
      }
    })
    //this.test.testget();
    */
  }
}
