
/* Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './error.handler';
import { ErrorInterceptor } from './error.interceptor.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  {provide: ErrorHandler, useClass: GlobalErrorHandler },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];