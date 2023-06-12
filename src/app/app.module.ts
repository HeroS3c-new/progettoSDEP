import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ModificaComponent } from './modifica/modifica.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ModificaModule } from './modifica/modifica.module';
import { CookieService } from 'ngx-cookie-service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModificaComponent,
    CalendarioComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModificaModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC02rrDvHw9A5XxG0d9IljfRhFbfcWcb6c",
      authDomain: "sincere-signal-237016.firebaseapp.com",
      databaseURL: "https://sincere-signal-237016.firebaseio.com",
      projectId: "sincere-signal-237016",
      storageBucket: "sincere-signal-237016.appspot.com",
      messagingSenderId: "187794614072",
      appId: "1:187794614072:web:4a1ad1ac0e92b4c6bdc3cd"
    }),
    AngularFireAuthModule

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
