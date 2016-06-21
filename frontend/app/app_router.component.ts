import {Component} from 'angular2/core'
import {RouteConfig, ROUTER_DIRECTIVES, Router, Location} from 'angular2/router'
import {HomeComponent} from './home.component'
import {HeaderComponent} from './components/header/header.component'
import {ContactComponent} from './components/contact/contact.component'
import {ContactListComponent} from './components/contact/contact-list.component'
import {NewContactComponent} from './components/contact/new-contact.component'

@Component({
    selector: 'app-router',
    template: `
    <header-component></header-component>
    <nav>
        <a [routerLink]="['Contacts']">Contacts</a>
        <a [routerLink]="['NewContacts']">New Contact</a>
    </nav>
    <div class="main">
		<router-outlet></router-outlet>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent, ContactComponent],
    styles:[]
})
@RouteConfig([
    { 
        path: '/', name: 'Home', component: HomeComponent
    },
    {
        path: '/contacts', name: 'Contacts', component: ContactListComponent
    },
    {
        path: '/contacts/new', name: 'NewContacts', component: NewContactComponent
    },
    {
        path: '/contacts/new/:contact', name: 'NewContactsFromContact', component: NewContactComponent
    },
])
export class AppRouterComponent {
  router: Router;
  location: Location;

  constructor(router: Router, location: Location) {
    this.router = router;
    this.location = location;
  }
}