import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent {
            users:User[];//searchfriends
            user1:User;
            
            constructor(private friend: UserService){}

            
            
            ngOnInit(){
                let mail = sessionStorage.getItem('email');
                //this.user1 = new User();
                this.friend.fetchUserDetails(mail).subscribe((data)=>{
                    this.user1 = data;
                    console.log(this.user1.friends)
                });
            }
            search(){
                let name = (<HTMLInputElement>document.getElementById("search")).value;
              //  console.log(name);
                this.friend.searchFriend(name).subscribe((data) => {
                    this.users = data;
                

                });
            }
            request(friendEmail:any){
                //alert("m")
                //this.user1=new User();
            
                let myEmail = sessionStorage.getItem('email');

                //console.log(myEmail);
                //console.log(friendEmail);
                this.friend.sendRequest(myEmail,friendEmail).subscribe((data) => {

                    
                });
            }

            confirm(friendEmail1:any){
                let myEmail1 = sessionStorage.getItem('email');

                this.friend.confirmRequest(myEmail1,friendEmail1).subscribe((data) => {

                })
            }
}


