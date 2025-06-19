import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {
     
    router = inject(Router)  
    

    logoff(){
      localStorage.removeItem('LoginUser');
      this.router.navigateByUrl('/login')
    }

    User_Name = localStorage.getItem('LoginUser')

 
}
