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
 res: any;
  resetUser(){
    
    this.rolesService.role="guest";
    //location.reload();//чтобы сбросить данные пользователя, проверь как будет работать на вкладке аккаунта
    setTimeout(
      function(){
        location.reload()//костыль
      },1000
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
