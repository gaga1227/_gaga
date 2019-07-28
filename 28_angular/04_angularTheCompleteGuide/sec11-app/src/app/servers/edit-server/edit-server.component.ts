import { Component, OnDestroy, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changeSaved = false;

  private paramSubscription: Subscription;
  private queryParamSubscription: Subscription;
  private fragmentSubscription: Subscription;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.paramSubscription = this.route.params
      .subscribe((params: Params) => {
        // update server info
        this.server = this.serversService.getServer(+params['id']); // need to use string
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      });
    this.queryParamSubscription = this.route.queryParams
      .subscribe((queryParam: Params) => {
        this.allowEdit = queryParam['allowEdit'] === '1';
      });
    this.fragmentSubscription = this.route.fragment.subscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
    this.queryParamSubscription.unsubscribe();
    this.fragmentSubscription.unsubscribe();
  }

  // implement canDeactivate so it will work with the guard and route
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    // can navigate away if not allowed to edit
    if (!this.allowEdit) {
      return true;
    }
    // can navigate away only if change saved
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)
      && !this.changeSaved) {
      return confirm('Do you want to discard the change?');
    } else {
      return true;
    }
  }

}
