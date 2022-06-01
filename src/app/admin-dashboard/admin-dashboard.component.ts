import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import swal from 'sweetalert2'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  userLogout() {
    this.authService.logout();
    swal.fire({
      text: 'You are now logged out!', icon: 'info', confirmButtonText:
      'OK',
    }).then(() => {
      this.router.navigate(["/"]);
    });
  }

}
