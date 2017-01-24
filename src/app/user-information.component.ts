import { Component,Input } from '@angular/core';


export class User{
  name : string;
  email : string;

}

@Component({
  selector: 'user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./app.component.css']
})
export class UserInformationComponent {
  user  : User = {
    name : 'neha',
    email : 'nehabh2910@gmail.com',
  };
selectedUser  : User;
  saveUser(user: User): void {
    console.log(user);
    this.selectedUser = user;
  }
}
