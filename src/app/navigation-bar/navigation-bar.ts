
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterOutlet,RouterLink, FontAwesomeModule ],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {
     
    faBars = faBars;
    faSignOutALt = faSignOutAlt;
    
    
    router = inject(Router)  
    

    logoff(){
      localStorage.removeItem('LoginUser');
      this.router.navigateByUrl('/login')
    }

    User_Name = localStorage.getItem('LoginUser')

 
}
