import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // inject global router and assign to field
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onLoadServers($event: MouseEvent) {
    // some logics...
    this.router.navigate(['/servers']);
  }

  onLoadServer(id: number) {
    this.router.navigate(
      ['/servers', id, 'edit'], // route path with dynamic value
      {
        queryParams: { // programmatically define queryParams attr value for route
          allowEdit: '1'
        },
        fragment: 'loading' // programmatically define fragment attr value for route
      }
      );
  }
}
