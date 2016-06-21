import {Injectable} from "angular2/core";
import {CONTACTS} from "../../models/contact/mock-contact";
import {Contact} from "../../models/contact/contact";

@Injectable()
export class ContactService {
	getContacts() {
		return Promise.resolve(CONTACTS);
	}

	insertContact(contact: Contact) {
		Promise.resolve(CONTACTS).then((contacts: Contact[]) => contacts.push(contact));
	}
}