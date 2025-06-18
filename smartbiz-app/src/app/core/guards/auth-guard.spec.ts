import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth-guard';
import { AuthService } from '../../core/services/auth';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: Router;

  const mockRoute = {} as ActivatedRouteSnapshot;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('AuthService', [
      'isLoggedIn',
      'getCurrentUserRole',
      'logout',
    ]);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: AuthService, useValue: authSpy }],
    });

    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow Admin to access /admin route', () => {
    authService.isLoggedIn.and.returnValue(true);
    authService.getCurrentUserRole.and.returnValue('Admin');

    const state = { url: '/admin' } as RouterStateSnapshot;

    const result = guard.canActivate(mockRoute, state);
    expect(result).toBeTrue();
  });

  it('should allow Employee to access /employee route', () => {
    authService.isLoggedIn.and.returnValue(true);
    authService.getCurrentUserRole.and.returnValue('Employee');

    const state = { url: '/employee' } as RouterStateSnapshot;

    const result = guard.canActivate(mockRoute, state);
    expect(result).toBeTrue();
  });

  it('should redirect Employee trying to access /admin', () => {
    authService.isLoggedIn.and.returnValue(true);
    authService.getCurrentUserRole.and.returnValue('Employee');

    const state = { url: '/admin' } as RouterStateSnapshot;

    const result = guard.canActivate(mockRoute, state);
    expect((result as any).toString()).toContain('/employee');
  });

  it('should redirect unauthenticated users to login', () => {
    authService.isLoggedIn.and.returnValue(false);

    const state = { url: '/admin' } as RouterStateSnapshot;

    const result = guard.canActivate(mockRoute, state);
    expect((result as any).toString()).toContain('/auth/login');
  });

  it('should log out and redirect if role is missing', () => {
    authService.isLoggedIn.and.returnValue(true);
    authService.getCurrentUserRole.and.returnValue(null);

    spyOn(authService, 'logout');

    const state = { url: '/admin' } as RouterStateSnapshot;

    const result = guard.canActivate(mockRoute, state);
    expect(authService.logout).toHaveBeenCalled();
    expect((result as any).toString()).toContain('/auth/login');
  });
});
