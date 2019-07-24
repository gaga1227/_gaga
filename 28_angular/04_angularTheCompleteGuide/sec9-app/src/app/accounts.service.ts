import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

// add decorator if you want to DI into this class, or make this class injectable
// this enables services can be lazy loaded and injected, avaiable in angular 6+
@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  // shared data for accounts services across components
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
