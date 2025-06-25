import { Routes } from '@angular/router';
import { Home } from './navigation-bar/home/home';
import { AboutUs } from './navigation-bar/about-us/about-us';

import { Service } from './navigation-bar/service/service';

import { NavigationBar } from './navigation-bar/navigation-bar';
import { authGuard } from './service/auth-guard';
import { Skills } from './navigation-bar/skills/skills';
import { ContactComponent } from './navigation-bar/contact/contact';
import { Login } from './login/login';

export const routes: Routes = [

    //this is  the default route .means Suppose our route path is empty so bydefault our route redirect to the login page
     
    {
        path:"",
        redirectTo : 'login',
        pathMatch:'full'
    },
    
    // Now create the route of the login page 

    {
     path : "login",
     component:Login,
    },

    //Now create the route for the login .after login user redirect to the navigation page

    {
        path : "",
        component: NavigationBar,
        children:[

    //this is all our route object ,It's compulsory for routing

    {
        path : 'home',
        component: Home,
        canActivate : [authGuard]     // Add the authGuard for the authitication
    },
    {
        path : "About-us",
        component:AboutUs,
        canActivate : [authGuard]

    },
    {
        path : "contact",
        component :ContactComponent,
        canActivate : [authGuard]
    },
    {
        path : "Service",
        component:Service,
        canActivate : [authGuard]

    },
    {
        path : "Skill",
        component: Skills,
        canActivate : [authGuard]
    }
        ]
    }

    
    
   
];
