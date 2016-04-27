import { Component } from 'angular2/core';
import {PartyFormComponent} from '../shared/party-form.component'

@Component({
    templateUrl: 'app/home/guest-home.component.html',
    directives: [PartyFormComponent],
    providers: []
})
export class GuestHomeComponent {
    public pageTitle: string = "Welcome Page Title";
}