import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';
import { User } from '../user';
import { UserdataService } from '../userdata.service';
import { PostdataService } from '../postdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public rolesService: RolesService, public userdata: UserdataService, public post: PostdataService) { }


 
  thisUser: User=
  {name:  localStorage.getItem('name'),
  surname: localStorage.getItem('surname'),
  email: localStorage.getItem('email'),
  password: localStorage.getItem('password'),
  role: localStorage.getItem('role'),
  image: localStorage.getItem('image'),};
  
  ngOnInit(): void {  
    if (!localStorage.getItem("reload")) {
      
            localStorage.setItem("reload", "true");
            location.reload();
        }
      
        else {
            localStorage.removeItem("reload");
      
        }
    
  }

}
