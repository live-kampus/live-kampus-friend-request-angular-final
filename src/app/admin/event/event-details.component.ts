import { Component } from '@angular/core';

@Component({

    //selector: 'event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponents {

    events = 

        {
            eventTopic: "annual",
            eventName: "Dance Name",
            date:  new Date(2019, 10, 28),
            eventVenue: "Mumbai",
            eventHost: "HR college",
            totNoOfPeople: 100

        }

    

}