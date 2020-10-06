import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpErrorInterceptor} from './http-error.interceptor';
import {AuthComponent} from './auth/auth.component';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import {LottiePlayer} from 'ngx-lottie/src/symbols';
import {ErrorComponent} from './error/error.component';
import {SpinnerComponent} from './spinner/spinner.component';
import { LoadingDirective } from './directives/loading/loading.directive';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

export function playerFactory(): LottiePlayer {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ErrorComponent,
    SpinnerComponent,
    LoadingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({player: playerFactory}),
    HttpClientModule, // use instead of httpModule
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
