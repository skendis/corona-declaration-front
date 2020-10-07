import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const urls = {
  signup: ``,
  login: ``,
  logout: ``
};

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string): void {
    // TODO: add logic + change ts typedef return from void to AuthResponse
  }

  login(email: string, password: string): void {
    // TODO: add logic + change ts typedef return from void to AuthResponse
  }

  logout(): void {
    // TODO: add logic + change ts typedef return from void to AuthResponse
  }
}
