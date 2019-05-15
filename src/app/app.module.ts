import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { RegistrationModule } from './registration/registration.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './app.service';
import { WelcomeLoginComponent } from './wecome-login.component';
import { LogoutComponent } from './logout.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeLoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    UserModule,
    HttpClientModule,
    RegistrationModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [
    AppComponent,
    
  ]
})
export class AppModule { }
