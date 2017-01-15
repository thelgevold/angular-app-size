import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app2/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);