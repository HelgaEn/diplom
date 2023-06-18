import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './animal';
import { News } from './news';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {

  constructor(private http: HttpClient) { }

  postData(){
    return this.http.get('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/animal.json');
  }
  homeData(){
    return this.http.get('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/home.json');
  }
  postHome(newA: Animal){
    return this.http.post('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/home.json',
    {
      id:newA.id,
      type: newA.type,
      name: newA.name,
      age: newA.age,
      image: newA.image,
      description: newA.description     
    });
  }
  postHomeDelete(id: any){
    return this.http.delete('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/animal/'+id+'.json')
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

  postFind(find: Request){
    return this.http.post('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/find.json', find)
  }
  postLost(find: Request){
    return this.http.post('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/lost.json',find)
  }
  getFind(){
    return this.http.get('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/find.json');
  }
  getLost(){
    return this.http.get('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/lost.json');
  }

  postRequest(req: any){
    return this.http.post('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/requests.json',req)
  }
  getRequest(){
    return this.http.get('https://vkrproj-f1cbd-default-rtdb.firebaseio.com/requests.json')
  }
}
