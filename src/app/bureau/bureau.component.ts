import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../postdata.service';

declare var ymaps:any;

@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.css']
})
export class BureauComponent implements OnInit {

  constructor(public post: PostdataService) { }

  public map: any;

  coord=[0,0];
  address ='';
  
  test(){
  this.post.getCoord(this.address).subscribe({next:(data:any) => {
       
    console.log(data);
    console.log(data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos);
  }
});
  }
  
  placemark:any;
  setPoint(){
    this.placemark = new ymaps.Placemark([this.coord[0],this.coord[1]],{},{});
    this.map.geoObjects.add(this.placemark)
  }

  ngOnInit(){
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [54.1838, 45.1749],
        zoom: 13
      });
      this.map.controls.remove('searchControl')
      this.map.controls.remove('trafficControl')
      this.map.controls.remove('fullscreenControl')
    });
    
  }
 
  
}
