import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'users', component: UsersComponent,
    children: [
      {path: ':id/:name', component: UserComponent}
    ]
  },
  {path: 'servers', component: ServersComponent,
    // canActivate: [AuthGuard], // points to service that implements canActivate
    canActivateChild: [AuthGuard], // points to service that implements canActivateChild
    children: [
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent,
        // angular will run CanDeactivateGuard when navigating away from this route
        canDeactivate: [CanDeactivateGuard]}
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'} // '**' matches the rest of all routes
];

@NgModule({
  imports: [
    // app module is eager loading, uses forRoot and root injector to provide services to all app
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    // need to also export RouterModule along with it as dependency
    RouterModule
  ]
})
export class AppRoutingModule {
}
