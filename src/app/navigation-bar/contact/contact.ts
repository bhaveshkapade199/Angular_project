import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contact',
  imports:[FontAwesomeModule,FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']  
})
export class ContactComponent {
 
  faLocationDot  = faLocationDot ;
   faPhone = faPhone;
  faEnvelope = faEnvelope;

  contactData = {
    First_name: '',
    Last_name: '',
    phone_number : '',
    Email_id : '',
    message: ''
  };

  submitForm() {
    console.log( this.contactData);
    Swal.fire('Done!', 'Your message is done', 'success');
   
    this.contactData = {
      First_name: '',
      Last_name: '',
      phone_number: '',
      Email_id :'',
      message:''
  }
  
}

}
