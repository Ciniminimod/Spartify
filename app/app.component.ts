
import {Component} from 'angular2/core';

import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { SongListComponent } from './songs/song-list.component';
import { SongService } from './services/song.service';
import { WelcomePageComponent } from './home/welcome.component';
import {HostHomeComponent} from './home/host-home.component';
import {GuestHomeComponent} from './home/guest-home.component';


@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand' [routerLink]="['Welcome']">Spartify</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Host']">Host</a></li>
                    <li><a [routerLink]="['Guest']">Join</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    ` ,
    directives: [ROUTER_DIRECTIVES],
    providers: [SongService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/welcome', name: 'Welcome', component: WelcomePageComponent, useAsDefault: true },
  { path: '/songs', name: 'Songs', component: SongListComponent }, 
  { path: '/host', name: 'Host', component: HostHomeComponent },
  { path: '/guest', name: 'Guest', component: GuestHomeComponent }  
])
export class AppComponent {
}