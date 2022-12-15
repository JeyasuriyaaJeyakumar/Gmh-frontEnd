import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhotoApplication';
  email: string;
  password: string;
  constructor(public userService: UserService, public messageService: MessageService) {}

  loggedIn(){
    this.userService.loggedIn();
  }
  logOut() {
    this.userService.logOut();
  }

  clearMessages(){
   this.messageService.clearMessages();
  }
}
