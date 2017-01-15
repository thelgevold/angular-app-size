import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app4/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);