import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AutenticatoreService {
  private autenticato: boolean = false;

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private router: Router
  ){}

  async signIn(username: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(username, password);
      this.autenticato = true;
    } catch (error) {
      this.autenticato = false;
      alert("Login failed");
    }
  }

  is_autenticato() {
    return this.autenticato;
  }
}
