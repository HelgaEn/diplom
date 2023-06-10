import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor(private http: HttpClient) { }


  /*postData(animalId: string){
    return this.http.get('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/animal/'+animalId+'.json');
  }*/
  postData(){
    return this.http.get('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/animal.json');
  }

  postanimal(newA: Animal){
    return this.http.post('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/animal.json',
    {
      id:newA.id,
      type: newA.type,
      name: newA.name,
      age: newA.age,
      image: newA.image,
      description: newA.description     
    });
  }
  newsData(newN: News){
    return this.http.post('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/news.json', newN)
  }
  getNews(){
    return this.http.get('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/news.json');
  }

  getCoord(address: string){
    return this.http.get('https://geocode-maps.yandex.ru/1.x/?format=json&apikey=ed610ab4-6610-41f0-bd68-aa19f102bf19&geocode='+address);
  }
}
