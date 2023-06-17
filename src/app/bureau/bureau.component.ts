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

  test(){//потом сотри
  this.post.getCoord(this.address).subscribe({next:(data:any) => {
       
    console.log(data);
    console.log(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2));
    var coo=data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2)
    console.log(coo)
  }
});
  }
  
  placemark:any;

  findCard: Request[]=[]
  fCard: Request[]=[]

  lostCard: Request[]=[]
  lCard: Request[]=[]
  findCoord: any=[]
  lostCoord: any=[]

  setFind(){
   let key
  for(key in this.findCoord){
    
    this.placemark = new ymaps.Placemark([this.findCoord[key][1],this.findCoord[key][0]],{
      balloonContent: this.findCoord[key][2]
    },{})
    this.map.geoObjects.add(this.placemark);
    //this.map.geoObjects.remove(this.placemark)
  }
  }
  setLost(){
  
    let key
  for(key in this.lostCoord){
    
    this.placemark = new ymaps.Placemark([this.lostCoord[key][1],this.lostCoord[key][0]],{
      balloonContent: this.findCoord[key][2]
    },{
      iconColor: 'red'
    })
    this.map.geoObjects.add(this.placemark);
    //this.map.geoObjects.remove(this.placemark)
  }
  }

  ngOnInit(){

 
    this.post.getFind().subscribe({next:(data:any) => {
      this.findCard.push(data); 
      let key
      for(key in Object.values(this.findCard[0])){
       
        this.fCard.push({
          title: Object.values(this.findCard[0])[key].title,
          text:Object.values(this.findCard[0])[key].text,
          author:Object.values(this.findCard[0])[key].author,
          image: Object.values(this.findCard[0])[key].image
        });
       
        if(Object.values(this.findCard[0])[key].coord0&&Object.values(this.findCard[0])[key].coord1&&Object.values(this.findCard[0])[key].title){
          let temp=[Object.values(this.findCard[0])[key].coord0,Object.values(this.findCard[0])[key].coord1,Object.values(this.findCard[0])[key].title]
          this.findCoord.push(temp)
         }
        
      }
            
    }});
    
    this.post.getLost().subscribe({next:(data:any) => {
      this.lostCard.push(data); 
      let key
      for(key in Object.values(this.lostCard[0])){
        
        this.lCard.push({
          title: Object.values(this.lostCard[0])[key].title,
          text:Object.values(this.lostCard[0])[key].text,
          author:Object.values(this.lostCard[0])[key].author,
          image: Object.values(this.lostCard[0])[key].image
        })
        if(Object.values(this.lostCard[0])[key].coord0&&Object.values(this.lostCard[0])[key].coord1){
          let temp=[Object.values(this.lostCard[0])[key].coord0,Object.values(this.lostCard[0])[key].coord1,Object.values(this.lostCard[0])[key].title]
          this.lostCoord.push(temp)
          
        }
      }
      
    }});


    
  
    ymaps.ready().then(() => {
  this.map = new ymaps.Map('map', {
    center: [54.1838, 45.1749],
    zoom: 13
  });
  console.log('map')
  this.map.controls.remove('searchControl')
  this.map.controls.remove('trafficControl')
  this.map.controls.remove('fullscreenControl')
  
});


  }
 
  
}
