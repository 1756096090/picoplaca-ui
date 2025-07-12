// src/app/app.config.ts
import { importProvidersFrom }       from '@angular/core';
import { BrowserAnimationsModule }   from '@angular/platform-browser/animations';
import { FormsModule }               from '@angular/forms';
import { HttpClientModule }          from '@angular/common/http';
import { MatInputModule }            from '@angular/material/input';
import { MatButtonModule }           from '@angular/material/button';
import { PicoplacaService }          from './services/picoplaca.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig = {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      MatInputModule,
      MatButtonModule
    ),
    PicoplacaService, provideAnimationsAsync()
  ]
};
