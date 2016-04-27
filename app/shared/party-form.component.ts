import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Party}    from './party';
@Component({
  selector: 'party-form',
  templateUrl: 'app/shared/party-form.component.html'
})
export class PartyFormComponent {
  submitted = false;
  model = new Party("Dominics Party", 'Dr Partay', true, '12345');
  
  onSubmit() { this.submitted = true; }
}

@Component({
  selector: 'new-party-form',
  templateUrl: 'app/shared/new-party-form.component.html'
})
export class NewPartyFormComponent {
  model = new Party("Dominics Party", 'Dr Partay', true, '12345');
  submitted = false;
  onSubmit() { this.submitted = true; }
}