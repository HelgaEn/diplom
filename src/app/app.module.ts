import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { MainstrComponent } from './mainstr/mainstr.component';
import { PodopechnieComponent } from './podopechnie/podopechnie.component';
import { NewsComponent } from './news/news.component';
import { AdminComponent } from './admin/admin.component';
import { HelpComponent } from './help/help.component';





@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegisterComponent,
    ProfileComponent,
    MainstrComponent,
    PodopechnieComponent,
    NewsComponent,
    AdminComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor(){}

 }
