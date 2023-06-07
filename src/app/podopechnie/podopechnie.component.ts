import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../postdata.service';
import { Animal } from '../animal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-podopechnie',
  templateUrl: './podopechnie.component.html',
  styleUrls: ['./podopechnie.component.css']
})
export class PodopechnieComponent implements OnInit {

  constructor(private router: Router, public post: PostdataService) { }

  posts: Animal[]=[];
  tposts: Animal[]=[];

  ngOnInit(): void {
    this.post.postData().subscribe({next:(data:any) => {
      this.posts.push(data); 
      //this.posts= data;
      console.log(data);  
       
      console.log(Object.values(this.posts[0])[0].name);
      let key
      for(key in Object.values(this.posts[0])){
        console.log(Object.values(this.posts[0])[key]);
        this.tposts.push({
          id: Object.values(this.posts[0])[key].id,
          name: Object.values(this.posts[0])[key].name,
          type: Object.values(this.posts[0])[key].type,
          age: Object.values(this.posts[0])[key].age,
          image:Object.values(this.posts[0])[key].image,
          description: Object.values(this.posts[0])[key].description
        })
      }
      
    }});
  }

}
