import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RolesService {
  //role: "guest" |"user"|"volunteer"| "admin" ="guest";
  constructor() { }

  role=localStorage.getItem('role');
  //role: store.selectSnapshot(AuthState.getUserInfo).role;
}
