import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { AccessGuard } from './access.guard';
import { MainstrComponent } from './mainstr/mainstr.component';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { AdminaccessGuard } from './adminaccess.guard';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { PodopechnieComponent } from './podopechnie/podopechnie.component';
import { NewsComponent } from './news/news.component';
import { AdminComponent } from './admin/admin.component';
import { HelpComponent } from './help/help.component';
import { BureauComponent } from './bureau/bureau.component';

const routes: Routes = [
  
  {
    path:"",
    title: "Главная страница",
    component: MainstrComponent
  },
  {
    path: "register",
    title:"Регистрация",
    component: RegisterComponent
  },
  {
    path: "profile",
    title:"Профиль",
    component: ProfileComponent//access 
  }, 
  {
    path: "auth",
    title:"Вход",
    component: AuthorizationComponent
  },
  {
    path: "catalog",
    title:"Подопечные",
    component: PodopechnieComponent 
  },
  {
    path: "news",
    title:"О приюте",
    component: NewsComponent 
  },
  {
    path: "admin",
    title:"Панель управления",
    component: AdminComponent 
  },
  {
    path: "help",
    title:"Помочь приюту",
    component: HelpComponent 
  },
  {
    path: "bureau",
    title:"Бюро находок",
    component: BureauComponent
  },
  {
    path: "**",
    title:"Ошибка",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
