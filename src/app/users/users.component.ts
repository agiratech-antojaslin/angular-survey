import { Component, OnInit } from '@angular/core';
import { User } from '../modals/user.modal';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userId: number = Math.floor(1000 + Math.random() * 9000);
  userNameErr: boolean = false;
  userEmailErr: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(userForm: any) {
    const form_data = userForm.value;
    if(form_data.userName == '') {
      this.userNameErr = true;
    } 
    if(form_data.userName == '') {
      this.userEmailErr = true;
    } 
    if(form_data.userName != '' && form_data.userName != '') {
      const user_obj = new User(this.userId, form_data.userName, form_data.userEmail);
      this.userService.createUser(user_obj);
    }
    
  }
}
