import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
  employeeName: string = '';
  constructor(private authService: AuthService, private router: Router) {}


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    this.employeeName = currentUser?.username || 'Employee';
  }
}
