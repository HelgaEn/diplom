import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../postdata.service';
import { Animal } from '../animal';
import { News } from '../news';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private animal: PostdataService) { }

  inputAnimal: Animal={
    id: '',
    type: '',
    name: '',
    age: '',
    image: '',
    description: ''
  };
  inputNews: News={
    title: '',
    text: ''
  }


  ngOnInit(): void {
  }

  //const forma = document.getElementById("form");
  


  newAnimal(){
    this.animal.postanimal(this.inputAnimal).subscribe({
      next: (resp)=>{
        console.log(resp+'запись сделана');//тут переделать в алерт об успешной операции
      }
    })
  }
  newNews(){
    this.animal.newsData(this.inputNews).subscribe({
      next: (resp)=>{
        console.log(resp+'запись сделана');
        this.inputNews={
          title: '',
          text: ''
        }//тут переделать в алерт об успешной операции
      }
    });

    //document.getElementById('form')?.onreset()
  }
}
