import {Router, RouterConfiguration} from 'aurelia-router';
import PageConfig from './page-config';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = PageConfig.Name;
    var routes:any[] = [{ route: ['', 'mainpage', 'home'], name: 'mainpage',      moduleId: 'mainpage',      nav: true, title: '' }];
    routes = routes.concat(
      PageConfig.PageSections.map(x=>({route: x.section, name: x.section, moduleId: 'mainpage', nav: false, title: ''}))
    );
    config.map(routes);

    this.router = router;
  }
}
