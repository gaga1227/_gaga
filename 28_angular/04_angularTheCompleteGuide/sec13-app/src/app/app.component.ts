import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;

  private subjectSubscription: Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.subjectSubscription = this.userService.activatedSubject
      .subscribe((activateStatus: boolean) => {
        this.userActivated = activateStatus;
      });
  }

  ngOnDestroy(): void {
    this.subjectSubscription.unsubscribe();
  }
}
