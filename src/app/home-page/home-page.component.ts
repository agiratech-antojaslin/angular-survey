import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.authService.login();
    swal.fire({
      text: 'You have successfully logged in!', icon: 'success', confirmButtonText:
      'OK',
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
