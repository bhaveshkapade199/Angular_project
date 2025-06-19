import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'; 
import { faCode  } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-service',
  imports: [FontAwesomeModule],
  templateUrl: './service.html',
  styleUrl: './service.css'
})
export class Service {
   
  faMobileAlt= faMobileAlt;
  faCode = faCode;
}
