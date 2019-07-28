import { Component, OnDestroy, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  private queryParamSubscription: Subscription;
  private fragmentSubscription: Subscription;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.queryParamSubscription = this.route.queryParams
      .subscribe((queryParam: Params) => {
        this.allowEdit = queryParam['allowEdit'] === '1';
      });
    this.fragmentSubscription = this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  ngOnDestroy(): void {
    this.queryParamSubscription.unsubscribe();
    this.fragmentSubscription.unsubscribe();
  }

}
