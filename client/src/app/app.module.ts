import { NgModule } from '@angular/core';
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
import { JwtInterceptor } from 'src/app/interceptor/aap';

// import services
import { serviceList } from "src/app/service/aap/service.module";

// import repositories
import { repositoryList } from "src/app/repository/aap/repository.list";

// import module components
import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from 'src/app/global/component/aap/confirmDialog.component';
import { routingComponents, appRouting } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
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
