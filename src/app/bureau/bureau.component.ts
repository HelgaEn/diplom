import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { PostdataService } from '../postdata.service';
import { Request } from '../request';
import { RolesService } from '../roles.service';

declare var ymaps:any;

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.css']
})
export class BureauComponent implements OnInit {

  constructor(public post: PostdataService, public rolesService: RolesService) { }

  public map: any;

  coord=[0,0];
  address ='';
  role=localStorage.getItem('role');
  
  findData: Request={
    title: '',
    text: '',
    author: localStorage.getItem('name')
  };
  addressLost='';
  lostData: Request={
    title: '',
    text: '',
    author: localStorage.getItem('name')
  };


  
  bureauFind(){
    this.post.getCoord(this.address).subscribe({next:(data:any) => {
      var coo=data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2);
      this.findData.coord0=coo[0];
      this.findData.coord1=coo[1];
    }
  });
  this.post.postFind(this.findData).subscribe({})
  console.log(this.findData)
  this.findData={
    title: '',
    text: '',
    author: localStorage.getItem('name')
  }
  }
  bureauLost(){
    this.post.getCoord(this.addressLost).subscribe({next:(data:any) => {
      var coo=data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2);
      this.lostData.coord0=coo[0];
      this.lostData.coord1=coo[1];
    }
  });
  this.post.postLost(this.lostData).subscribe({})
  console.log(this.lostData)
  this.lostData={
    title: '',
    text: '',
    author: localStorage.getItem('name')
  }
  }

  test(){
  this.post.getCoord(this.address).subscribe({next:(data:any) => {
       
    console.log(data);
    console.log(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2));
    var coo=data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2)
    console.log(coo)
  }
});
  }
  
  placemark:any;
  setPoint(){
    this.placemark = new ymaps.Placemark([this.coord[0],this.coord[1]],{},{});
    this.map.geoObjects.add(this.placemark)
  }
  findCard: Request[]=[]
  fCard: Request[]=[]

  lostCard: Request[]=[]
  lCard: Request[]=[]
  ngOnInit(){
    
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [54.1838, 45.1749],
        zoom: 13
      });
      this.placemark = new ymaps.Placemark([54.1838, 45.1749],{},{})

      this.map.controls.remove('searchControl')
      this.map.controls.remove('trafficControl')
      this.map.controls.remove('fullscreenControl')

      this.map.geoObjects.add(this.placemark);
    });
   
    
   

      this.post.getFind().subscribe({next:(data:any) => {
        this.findCard.push(data); 
                 
        console.log(Object.values(this.findCard[0])[0].name);
        let key
        for(key in Object.values(this.findCard[0])){
          console.log(Object.values(this.findCard[0])[key]);
          this.fCard.push({
            title: Object.values(this.findCard[0])[key].title,
            text:Object.values(this.findCard[0])[key].text,
            author:Object.values(this.findCard[0])[key].author,
            image: Object.values(this.findCard[0])[key].image
          })
        }
        
      }});
      
      this.post.getLost().subscribe({next:(data:any) => {
        this.lostCard.push(data); 
        
        console.log(Object.values(this.lostCard[0])[0].name);
        let key
        for(key in Object.values(this.lostCard[0])){
          console.log(Object.values(this.lostCard[0])[key]);
          this.lCard.push({
            title: Object.values(this.lostCard[0])[key].title,
            text:Object.values(this.lostCard[0])[key].text,
            author:Object.values(this.lostCard[0])[key].author,
            image: Object.values(this.lostCard[0])[key].image
          })
        }
        
      }});
    
  

  }
 
  
}
