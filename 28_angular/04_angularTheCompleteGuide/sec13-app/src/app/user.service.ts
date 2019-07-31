import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // activatedEmitter = new EventEmitter<boolean>();

  // using rxjs subject rather than event emitter
  // A subject is both an observable and an observer
  // Subject is hot observable
  activatedSubject = new Subject<boolean>();
}
