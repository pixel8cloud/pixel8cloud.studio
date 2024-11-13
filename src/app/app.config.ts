import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { NavigationEnd, provideRouter, Router, UrlHandlingStrategy, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrailingSlashUrlHandlingStrategy } from './trailing-slash-url-handling-strategy';

declare let gtag: Function;

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withInMemoryScrolling({
    scrollPositionRestoration: "top",
  })),
  { provide: UrlHandlingStrategy, useClass: TrailingSlashUrlHandlingStrategy },
  provideClientHydration(),
  importProvidersFrom(BrowserAnimationsModule),
  {
    provide: 'RouterInitializer',
    useFactory: (router: Router) => {
      return () => {
        router.events.subscribe((event) => {
          if (event instanceof NavigationEnd) {
            gtag('config', 'G-TP06RL198X', {
              page_path: event.urlAfterRedirects,
            });
          }
        });
      };
    },
    deps: [Router],
  },]
};