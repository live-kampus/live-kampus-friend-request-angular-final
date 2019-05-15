import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
   // selector:"school-list",
    templateUrl:"./school-list.component.html",
    styleUrls:["./school-list.component.css"]
})
export class SchoolListComponent{
    
    schools= [
        {
            "schoolId": 101,
            "name": "DYPCOE"
        },
        {
            "schoolId": 102,
            "name": "DYP"
        },
        {
            "schoolId": 103,
            "name": "TIT"
        }
        
        
    ]
        
}