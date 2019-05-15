import { Component } from '@angular/core';

@Component({
    selector:'user-details',
    templateUrl:'./users-details.component.html',
    styleUrls:['./users-details.component.css']
})
export class UserDetailsComponent{

    usersdetails= [
        {
            "name": "Akshay",
            "email":"gsdkf@gmail.com",
            "contact":1523641256,
            "address":"WebGLShaderPrecisionForma",
            "city":"",
            "state":"",
            "gender":"",
            "school":"",
            "dob":"",
            "bio":""
        }
    ]
}