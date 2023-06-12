import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutenticatoreService } from '../autenticatore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private serv:AutenticatoreService) {}

  login(form: NgForm) {
    let username=form.value.username;
    let password=form.value.password;
    this.serv.signIn(username, password);
    
  }

}
