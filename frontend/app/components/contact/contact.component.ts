import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Contact} from "../../models/contact/contact";

@Component({
	selector: 'contact',
	templateUrl: '/app/components/contact/contact.component.html',
	inputs: ["contact"],
	styles: [`
		label {
			display: inline-block;
			width: 140px;
		}

		input {
			width: 250px;
		}
	`]
})

export class ContactComponent {
	public contact: Contact = null;

	constructor(private _router: Router) {}

	onCreateNew() {
		this._router.navigate(['NewContactsFromContact', { contact: this.contact }])
	}
}