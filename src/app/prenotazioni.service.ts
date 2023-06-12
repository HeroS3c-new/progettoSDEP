import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Prenotazione {
  id: number;
  materia: string;
  professore: string;
  inizio: string;
  fine: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  getPrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.apiUrl + '/prenotazioni');
  }
  

  addPrenotazione(materia: string, professore: string, inizio: string, fine: string) {
    const prenotazione = { materia, professore, inizio, fine};
    return this.http.post(this.apiUrl + '/prenotazioni', prenotazione);
  }

  updatePrenotazione(id: number, materia: string, professore: string, inizio: string, fine: string) {
    const prenotazione = {materia, professore, inizio, fine};
    console.log(prenotazione);
    return this.http.put(this.apiUrl + '/prenotazioni/' + id, prenotazione).subscribe(res => console.log(res));
  }

  deletePrenotazione(id: number) {
    return this.http.delete(this.apiUrl + '/prenotazioni/' + id);
  }
}
