import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";
import {ControlGroup} from "angular2/common";
import {FormBuilder} from "angular2/common";
import {Validators} from "angular2/common";
import {ContactService} from "../../services/contact/contact.service";
import {Contact} from "../../models/contact/contact";

@Component({
	templateUrl: '/app/components/contact/new-contact.component.html',
	providers: [ContactService],
	styles: [`
		label {
			display: inline-block;
			width: 140px;
		}

		input {
			width: 250px;
		}

		.ng-invalid {
			border: 1px solid red;
		}
	`]
})

export class NewContactComponent implements OnInit {

	myForm: ControlGroup;
	newContact : Contact;

	constructor(private _contactService: ContactService, private _router: Router, private _routerParams: RouteParams, private _formBuilder: FormBuilder) {}

	onSubmit(value) {
		this._contactService.insertContact(value);
		this._router.navigate(['Contacts']);
	}

	ngOnInit():any {
		this.newContact = this._routerParams.get('contact');

		this.myForm = this._formBuilder.group({
			'firstName': [this.newContact.firstName, Validators.required],
			'lastName': [this.newContact.lastName, Validators.required],
			'phone': [this.newContact.phone, Validators.required],
			'email': [this.newContact.email, Validators.required],
		});
	}
}