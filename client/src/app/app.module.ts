import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, HttpBackend } from '@angular/common/http';

import { MaterialModule } from './material-module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(handler: HttpBackend) {
  const http = new HttpClient(handler);
  return new TranslateHttpLoader(http);
  //return new TranslateHttpLoader(httpClient, environment.feUrl + 'assets/i18n/', '.txt'); 
}

// import interceptors
import { JwtInterceptor, ErrorInterceptor } from 'src/app/interceptor/aaap';

// import global components
import { GlobalErrorHandler } from './global/aaap/error/global-error-handler';
import { ConfirmDialogComponent } from 'src/app/global/aaap/component/confirmDialog.component';

// import services
import { serviceList } from "src/app/service/aaap/service.module";

// import repositories
import { repositoryList } from "src/app/repository/aaap/repository.list";

// import module components
import { AppComponent } from './app.component';

import { designComponentList } from 'src/app/design/aaap/design.component';
import { routingComponents, appRouting } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    designComponentList,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpBackend],
      },
      defaultLanguage: 'de'
    }),
    MaterialModule,
    appRouting
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    ...serviceList,
    ...repositoryList
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class AppModule { }
