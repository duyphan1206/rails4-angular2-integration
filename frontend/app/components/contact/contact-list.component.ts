import {Component} from "angular2/core";
import {ContactComponent} from './contact.component';
import {ContactService} from "../../services/contact/contact.service";
import {Contact} from "../../models/contact/contact";
import {OnInit} from "angular2/core";

@Component({
	selector: 'contact-list',
	templateUrl: '/app/components/contact/contact-list.component.html',
	directives: [ContactComponent],
	providers: [ContactService]
})

export class ContactListComponent implements OnInit {
	public contacts: Contact[];
	public selectedContact = null;

	constructor(private _contactService: ContactService) {}

	onSelect(contact) {
		this.selectedContact = contact;
	}

	getContact() {
		this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
	}

	ngOnInit():any {
		this.getContact();
	}
}