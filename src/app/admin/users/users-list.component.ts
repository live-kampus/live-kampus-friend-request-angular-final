import { Component } from '@angular/core';

@Component({
    // selector:'user-list',
    templateUrl:'./users-list.component.html',
    styleUrls:['./users-list.component.css']
})
export class UserListComponent{

    users= [
        {
            "userId": 1,
            "userName": "Akshay"
        },
        {
            "userId": 2,
            "userName": "Abbas"
        },
        {
            "userId": 3,
            "userName": "Kapil"
        }
    ]

}