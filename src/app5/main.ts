import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app5/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);