import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.route';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './Friends/friends.component';
import { UserEventlistComponent } from './event/user-event-list.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatComponent } from './chat/chat.component';
import { RoomSpaceComponent } from './Room-space/room-space.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from '../logout.component';

@NgModule({
    declarations: [
        UserComponent,
        HomeComponent,
        ProfileComponent,
        FriendsComponent,
        UserEventlistComponent,
        NotificationComponent,
        ChatComponent,
        RoomSpaceComponent
    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        RouterModule.forChild(userRoutes),

    ],
    exports: [
        UserComponent,
        RouterModule,
        FriendsComponent
    ],
    providers:[
        UserService
    ]
})
export class UserModule {
}
