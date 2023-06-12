import { NgModule } from '@angular/core';
import { PrenotazioniService } from '../prenotazioni.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [PrenotazioniService],
})
export class ModificaModule { }
