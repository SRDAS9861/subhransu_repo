import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth'; // ✅ Adjust path

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements OnInit{
  adimnName: string = '';
  constructor(private router: Router, private authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    this.adimnName = currentUser?.username || 'Admin';
  }
}
