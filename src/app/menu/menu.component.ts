import { Component } from '@angular/core';
import { AutenticatoreService } from '../autenticatore.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public servAut:AutenticatoreService) {
    
  }

}
