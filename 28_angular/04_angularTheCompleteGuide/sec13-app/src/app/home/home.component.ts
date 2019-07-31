import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    this.intervalSubscription = interval(1000)
      .subscribe(
        (count: number) => {
          console.log(count);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          console.log('complete');
        }
      );
  }

  // subscriptions to non-angular observables won't be cleaned up on destroy,
  // should manually unsubscribe
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
