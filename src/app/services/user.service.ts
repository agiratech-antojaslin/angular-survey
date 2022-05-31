import { User } from "../modals/user.modal";
import { Injectable } from '@angular/core'; 

@Injectable({    
    providedIn: 'root'    
}) 
export class UserService {
    users = [ new User(1234, "Jaslin", "jaslin@mail.com") ];

    createUser(newUser: User) {
        this.users.push(newUser);
        console.log(this.users);
    }

    getUser() {
        return this.users;
    }

}