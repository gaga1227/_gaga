import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  private routeParamsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // ActivatedRoute is initialised when component initialised
    // fine for first initialisation
    // snapshot won't update it by itself
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    // params are Observables, not values
    // future updates
    this.routeParamsSubscription = this.route.params
      .subscribe((params: Params) => {
        this.user = {
          id: params['id'],
          name: params['name']
        };
      });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription.unsubscribe();
  }

}
