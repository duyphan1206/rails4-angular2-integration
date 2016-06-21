import {provide} from 'angular2/core'
import {bootstrap} from 'angular2/platform/browser'
import {AppRouterComponent} from './app_router.component'
import {HTTP_PROVIDERS} from 'angular2/http'
import {
  ROUTER_PRIMARY_COMPONENT,
  APP_BASE_HREF,
  ROUTER_PROVIDERS as NG2_ROUTER_PROVIDERS,
  LocationStrategy,
  HashLocationStrategy
} from 'angular2/router';

const ROUTER_PROVIDERS: Array<any> = [
  NG2_ROUTER_PROVIDERS,
  provide(ROUTER_PRIMARY_COMPONENT, {
    useValue: AppRouterComponent
  }),
  provide(LocationStrategy, {
    useClass: HashLocationStrategy
  }),
  provide(APP_BASE_HREF, {
    useValue: '/'
  })
];

// These are dependencies of our App
const APP_PROVIDERS: Array<any> = [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
];

bootstrap(AppRouterComponent, APP_PROVIDERS);