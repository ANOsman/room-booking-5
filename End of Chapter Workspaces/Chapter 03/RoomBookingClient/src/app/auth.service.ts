import {EventEmitter, Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated = false;
  authenticationResultEvent = new EventEmitter<boolean>();

  constructor(private dataService: DataService) { }

  authenticate(name: string, password: string) {
    this.dataService.validateUser(name,password).subscribe(
    next=> {
      this.isAuthenticated = true;
      this.authenticationResultEvent.emit(true);
    },
      error =>
      {
        this.isAuthenticated = false;
        this.authenticationResultEvent.emit(false);
      }
    );

  }
}
