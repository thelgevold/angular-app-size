import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app3/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);