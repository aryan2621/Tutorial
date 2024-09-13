import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//  Step-2: Bootstrap the AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
// this line means that the AppModule will be loaded when the application starts
  .catch(err => console.error(err));
