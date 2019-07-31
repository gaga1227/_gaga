import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

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
    // this.intervalSubscription = interval(1000)
    //   .subscribe(
    //     (count: number) => {
    //       console.log(count);
    //     },
    //     (error: any) => {
    //       console.log(error);
    //     },
    //     () => {
    //       console.log('complete');
    //     }
    //   );

    // custom interval observable
    // takes Observer type in subscribe function,
    // and manually calls Observer.next() to emit values
    const customIntervalObservable = new Observable(
      (observer: Observer<number>) => {
        let count = 0;
        setInterval(() => {
          // next can be called 0 or more times
          observer.next(count);

          if (count === 2) {
            // complete should only be called as the last call when done
            // observer.complete call ends the subscription
            observer.complete();
          }

          if (count > 3) {
            // error should only be called as the last call when error occurs
            // observer.error call ends the subscription
            // error won't trigger complete call
            observer.error(new Error('Count is larger than 3!'));
          }

          count++;
        }, 1000);
      });

    this.intervalSubscription = customIntervalObservable
      .subscribe(
        (count: number) => {
          console.log('custom interval', count);
        },
        (error: any) => {
          console.log(error);
        },
        () => {
          console.log('custom interval complete');
        }
      );
  }

  // subscriptions to non-angular observables won't be cleaned up on destroy,
  // should manually unsubscribe
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

}
