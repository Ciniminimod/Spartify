import { Component } from 'angular2/core';
import {PartyFormComponent, NewPartyFormComponent} from '../shared/party-form.component';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    directives: [ROUTER_DIRECTIVES, PartyFormComponent, NewPartyFormComponent],
    providers: []
})
export class WelcomePageComponent {
    public pageTitle: string = "Welcome Page Title";
}