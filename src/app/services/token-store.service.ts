import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStoreService {

  TOKEN_KEY = 'auth-token';
  USER_KEY = 'auth-user';

  constructor() {}

  private isSessionStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined';
  }

  setToken(token: string): void {
    if (this.isSessionStorageAvailable()) {
      sessionStorage.removeItem(this.TOKEN_KEY);
      sessionStorage.setItem(this.TOKEN_KEY, token);
    } else {
      console.warn('Session storage is not available');
    }
  }

  getToken(): string | null {
    if (this.isSessionStorageAvailable()) {
      return sessionStorage.getItem(this.TOKEN_KEY);
    } else {
      console.warn('Session storage is not available');
      return null;
    }
  }

  setUser(user: any): void {
    if (this.isSessionStorageAvailable()) {
      sessionStorage.removeItem(this.USER_KEY);
      sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    } else {
      console.warn('Session storage is not available');
    }
  }

  getUser(): any {
    if (this.isSessionStorageAvailable()) {
      const user = sessionStorage.getItem(this.USER_KEY);
      return user ? JSON.parse(user) : null;
    } else {
      console.warn('Session storage is not available');
      return null;
    }
  }

  clearStorage(): void {
    if (this.isSessionStorageAvailable()) {
      sessionStorage.clear();
    } else {
      console.warn('Session storage is not available');
    }
  }
}
