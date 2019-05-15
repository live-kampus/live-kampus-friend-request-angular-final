import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RouterModule } from '@angular/router';
import { registrationRoute } from './registration.route';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration.service';



@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports:[
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(registrationRoute)
    ],
    exports: [
        RegistrationComponent,
        RouterModule
    ],
    providers:[
        RegistrationService
    ]
})
export class RegistrationModule{

}