import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { PostdataService } from '../postdata.service';
import { Animal } from '../animal';




@Component({
  selector: 'app-mainstr',
  templateUrl: './mainstr.component.html',
  styleUrls: ['./mainstr.component.css']
})
export class MainstrComponent implements OnInit {
  
  
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
  
  
  // this.post.postData().subscribe({next:(data:any) => this.posts[0]=data});
  
  }

  /*open(id: string){
    this.router.navigate(['/catalog/',id], { 
      queryParams: { вместо каталог карточки с животными
        id: id
      },
    });
  }*/

}
