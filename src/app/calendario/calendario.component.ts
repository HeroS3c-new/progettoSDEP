import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { PrenotazioniService } from '../prenotazioni.service';

@Component({
  selector: 'app-calendario',
  template: `
    <div id="calendar"></div>
  `
})

export class CalendarioComponent implements OnInit {

  calendar: Calendar | undefined;

  constructor(private prenotazioniService: PrenotazioniService) { }

  ngOnInit() {
    let calendarEl = document.getElementById('calendar');

    if (calendarEl) { // controllo necessario anche se c'è l'elemento calendar (motivi di compilazione)
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridWeek',
        eventContent: function (arg) {
          let prof = arg.event.extendedProps['prof'];
          let arrayOfDomNodes = [
            document.createElement('p'),
            document.createElement('b'),
            document.createElement('i')
          ];
          let startTime = arg.event.start ? arg.event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
          let endTime = arg.event.end ? arg.event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
          arrayOfDomNodes[0].innerHTML = startTime + ' - ' + endTime;
          arrayOfDomNodes[1].innerHTML = arg.event.title;
          arrayOfDomNodes[2].innerHTML = ' - ' + prof;
          return { domNodes: arrayOfDomNodes };
        }
      });

      this.prenotazioniService.getPrenotazioni().subscribe(data => {
        data.forEach(lesson => {
          let newLesson = {
            title: lesson.materia,
            extendedProps: {
              prof: lesson.professore
            },
            start: lesson.inizio,
            end: lesson.fine
          };

          if (this.calendar) {
            this.calendar.addEvent(newLesson);
          }
        });
        if (this.calendar) this.calendar.render();

      });

      this.prenotazioniService.getPrenotazioni();
    }
  }
}
