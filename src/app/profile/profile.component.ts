import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';
import { User } from '../user';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public rolesService: RolesService, public userdata: UserdataService) { }


  thisUser= this.userdata.newUser;

  ngOnInit(): void {
   // this.userdata.getUser(this.thisUser.email).subscribe({next:(data:any) => this.thisUser= data})
  }

}
