import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';
import { User } from '../user';
import { UserdataService } from '../userdata.service';
import { PostdataService } from '../postdata.service';
import { Request } from '../request';
import { News } from '../news';

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

  contacts=''
mess: Request={
  title:'',
  text:'',
  author:localStorage.getItem('email')
}
inputNews: News={
  title:'',
  text: '',
  img: ''
}
newNews(){
  this.post.newsData(this.inputNews).subscribe({
    next: (resp)=>{
      alert('запись сделана');
      this.inputNews={
        title: '',
        text: ''
      }
    }
  });

}

sendRequest(){
  this.mess.text= this.mess.text+' '+this.contacts;

  this.post.postRequest(this.mess).subscribe({
    next: (data)=>{
      alert("ваша заявка отправлена")
    }
  })

  this.mess.text='',
  this.mess.title='',
  this.contacts=''

}

posts: Request[]=[];
tposts: Request[]=[];

showRequests(){

  this.post.getRequest().subscribe({next:(data:any) => {
    this.posts.push(data); 
    
    let key
    for(key in Object.values(this.posts[0])){
      //console.log(Object.values(this.posts[0])[key]);
      this.tposts.push({
        title: Object.values(this.posts[0])[key].title,
        text:Object.values(this.posts[0])[key].text,
        author: Object.values(this.posts[0])[key].author,
        id: Object.keys(this.posts[0])[key]
      })
    }
    
  }});

}

  
  ngOnInit(): void {  
    this.showRequests()
    if (!localStorage.getItem("reload")) {
      
            localStorage.setItem("reload", "true");
            location.reload();
        }
      
        else {
            localStorage.removeItem("reload");
      
        }
    
  }

}
