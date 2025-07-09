import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
   provideRouter(
    routes ,
    withInMemoryScrolling({
    scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
  })
 ),
     provideAnimations(),
    provideToastr({
      timeOut: 3000, 
      positionClass: 'toast-bottom-right', 
      progressBar: false,
      closeButton: true, 
      
    })
  ]
};
