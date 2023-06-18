import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../postdata.service';
import { News } from '../news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public post: PostdataService) { }

  posts: News[]=[];
  tposts: News[]=[];
  ngOnInit(): void {
    this.post.getNews().subscribe({next:(data:any) => {
      this.posts.push(data); 
      //this.posts= data;
     // console.log(data);  
       
     // console.log(Object.values(this.posts[0])[0].name);
      let key
      for(key in Object.values(this.posts[0])){
        //console.log(Object.values(this.posts[0])[key]);
        this.tposts.push({
          title: Object.values(this.posts[0])[key].title,
          text:Object.values(this.posts[0])[key].text,
          img: Object.values(this.posts[0])[key].img
        })
      }
      
    }});
    
  }

}
