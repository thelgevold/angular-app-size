import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app1/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);