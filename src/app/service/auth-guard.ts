import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  //Now create the router object for the redirect to the another page

  const router = inject(Router);  // this is our arrow function that's reason we can take the variable type

  //Read the logged user means which user logged so first of all read the data

  const loggeduser = localStorage.getItem('LoginUser');

  if(loggeduser != null){
    return true;
  }
  else{
     router.navigateByUrl("/login")
     return false;
  }
};
