import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  username = '';
  password = '';
  loginError = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    const success = this.authService.login(this.username, this.password);

    if (success) {
      const role = this.authService.getCurrentUserRole();
      if (role === 'Admin') {
        this.router.navigate(['/admin']);
      } else if (role === 'Employee') {
        this.router.navigate(['/employee']);
      }
    } else {
      this.loginError = 'Invalid username or password.';
    }
  }
}
