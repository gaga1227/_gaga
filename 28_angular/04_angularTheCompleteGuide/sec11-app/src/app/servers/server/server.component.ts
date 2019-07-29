import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: { id: number, name: string, status: string };
  // private paramSubscription: Subscription;
  private dataSubscription: Subscription;

  constructor(
    // private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // this.paramSubscription = this.route.params
    //   .subscribe((params: Params) => {
    //     const id = (params && params.id) || 1;
    //     this.server = this.serversService.getServer(parseInt(id, 10));
    //   });

    // now using resolve guard to get server data
    // resolve guard data will be available in 'Route.data'
    this.dataSubscription = this.route.data
      .subscribe((data: Data) => {
        this.server = data['server']; // match property name in route definition module
      });
  }

  ngOnDestroy(): void {
    // this.paramSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

  onEdit() {
    // using relative route path navigate to child route
    this.router.navigate(['edit'], {
      relativeTo: this.route, // make this route navigation relative
      queryParamsHandling: 'preserve' // will carry all current query params
    });
  }
}
