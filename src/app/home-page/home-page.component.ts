import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import swal from 'sweetalert2'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.authService.login();
    swal.fire({
      text: 'You have successfully logged in!', icon: 'success', confirmButtonText:
      'OK',
    }).then(() => {
      this.router.navigate(["users/create"]);
    });
    
  }

  userLoginAdmin() {
    this.authService.loginAdmin();
    swal.fire({
      text: 'You have successfully logged in!', icon: 'success', confirmButtonText:
      'OK',
    }).then(() => {
      this.router.navigate(["admin/dashboard"]);
    });
  }

  userLogout() {
    this.authService.logout();
    swal.fire({
      text: 'You are now logged out!', icon: 'info', confirmButtonText:
      'OK',
    });
  }

}
