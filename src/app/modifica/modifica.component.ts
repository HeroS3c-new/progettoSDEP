import { Component } from '@angular/core';
import { PrenotazioniService } from '../prenotazioni.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent {
  displayedColumns: string[] = ['materia', 'professore', 'inizio', 'fine', 'actions'];

  prenotazioni: any[];
  newMateria: string;
  newProfessore: string;
  newInizio: string;
  newFine: string;
  selectedDate: Date = new Date();

  constructor(private prenotazioniService: PrenotazioniService) {
    this.prenotazioni = [];
    this.newMateria = '';
    this.newProfessore = '';
    this.newInizio = '';
    this.newFine = '';
  }

  ngOnInit() {
    this.prenotazioniService.getPrenotazioni().pipe(
      map((response: any) => response as any[])
    ).subscribe(prenotazioni => {
      this.prenotazioni = prenotazioni;
    });
  }

  addPrenotazione() {
    this.prenotazioniService.addPrenotazione(this.newMateria, this.newProfessore, this.newInizio, this.newFine).subscribe(prenotazione => {
      // Aggiungi la nuova prenotazione alla lista delle prenotazioni
      this.prenotazioni.push(prenotazione);
      // Svuota i campi di input del modulo
      this.newMateria = '';
      this.newProfessore = '';
      this.newInizio = '';
      this.newFine = '';
      this.ngOnInit(); // per aggiornare anche gli id richiamo la ngOnInit()
    });
  }

  updatePrenotazione(id: number, materia: string, professore: string, inizio: string, fine: string) {
    console.log(id, materia, professore, inizio, fine)
    this.prenotazioniService.updatePrenotazione(id, materia, professore, inizio, fine);
  }

  deletePrenotazione(id: number) {
    this.prenotazioniService.deletePrenotazione(id).subscribe(() => {
      // Rimuovi la prenotazione dalla lista delle prenotazioni
      this.prenotazioni = this.prenotazioni.filter(p => p.id !== id);
    });
  }

  onSelect(event: Date) {
    this.selectedDate = event;
  }

  hasPrenotazione(date: Date) {
    return this.prenotazioni.some(
      prenotazione => new Date(prenotazione.inizio).toDateString() === date.toDateString()
    );
  }

  getPrenotazioni(date: Date) {
    return this.prenotazioni.filter(
      prenotazione => new Date(prenotazione.inizio).toDateString() === date.toDateString()
    );
  }
}
