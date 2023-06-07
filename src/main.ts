import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppRoutingModule } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  export class main{
    constructor(public router: Router){}

    route(){
      this.router.navigate(['./'])
    }

    // document.getElementById('main')?.addEventListener('click', (this.route()))
// Добавляем обработку события
//element.addEventListener('click', (route());

  }
