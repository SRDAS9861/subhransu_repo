import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
 { path: 'auth', loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule) },

  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule) },

  { path: 'employee', canActivate: [AuthGuard], loadChildren: () => import('./employee/employee-module').then(m => m.EmployeeModule) },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
