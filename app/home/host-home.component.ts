import { Component } from 'angular2/core';
import {NewPartyFormComponent} from '../shared/party-form.component'

@Component({
    templateUrl: 'app/home/host-home.component.html',
    directives: [NewPartyFormComponent],
    providers: []
})
export class HostHomeComponent {
    public pageTitle: string = "Welcome Page Title";
}