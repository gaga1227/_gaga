import { Component, OnDestroy, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: { id: number, name: string, status: string };
  private paramSubscription: Subscription;

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.paramSubscription = this.route.params
      .subscribe((params: Params) => {
        const id = (params && params.id) || 1;
        this.server = this.serversService.getServer(parseInt(id, 10));
      });
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  onEdit() {
    // using relative route path
    this.router.navigate(['edit'], {
      relativeTo: this.route, // make this route navigation relative
      queryParamsHandling: 'preserve' // will carry all current query params
    });
  }
}
