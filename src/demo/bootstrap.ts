import {platformBrowser} from '@angular/platform-browser/index';
import {AppModuleNgFactory} from '../aot/src/demo/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
