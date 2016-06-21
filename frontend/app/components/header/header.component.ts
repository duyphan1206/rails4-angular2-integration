import {Component, OnInit} from 'angular2/core'
import {RouteParams}  from 'angular2/router'
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'header-component',
    templateUrl: '/app/components/header/header.component.html'
})

export class HeaderComponent {
    constructor( public http: Http){
    }
}