// @Injectable({
//   providedIn: 'root'
// })
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

  constructor() {
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name, status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}
