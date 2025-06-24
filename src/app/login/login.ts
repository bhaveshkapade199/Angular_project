import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../navigation-bar/service/service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
     userobj: any = {
         
      User_name : "",
      Password : ""
    }
     
    // create the router instance for the routing to the next Screen

    router = inject(Router)

    Submit(){
      debugger;
      if(this.userobj.User_name == "Bhavesh" && this.userobj.Password =="12345"){
        alert("Loggin Successfully")
        debugger
        //means Which User login on the page So this user name sarv in the local Storage 
        
        localStorage.setItem('LoginUser',this.userobj.User_name)
        debugger;
        this.router.navigate(['/home'])
      }
      else{
        if(this.userobj.User_name == "" && this.userobj.Password ==""){
          alert("Please enter the Username and Password")
         }
        else if(this.userobj.User_name==""){
          alert("Please enter the Username")
        }
        else if(this.userobj.User_name!="Bhavesh"){
          alert("Please enter valid Username")
        }
        else if(this.userobj.Password==""){
          alert("Please enter the Password")
        }
        else if(this.userobj.Password !="12345"){
          alert("Please enter the valid Password")
        }
        else{
          alert("Please enter the Username and Password")
        }
      }
      
    }
}
