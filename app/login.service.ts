// login.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn = false;

  setLoginStatus(status: boolean): void {
    this.isLoggedIn = status;
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}
