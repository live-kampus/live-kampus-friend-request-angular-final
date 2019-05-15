import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeLoginComponent } from './wecome-login.component';
import { LogoutComponent } from './logout.component';



export const appRoutes: Routes=[
    {path:"",component:WelcomeLoginComponent},
    {path:"user",component:AppComponent},
    {path:"logout",component:LogoutComponent}
    // {path: '',component: AppComponent}
    
];