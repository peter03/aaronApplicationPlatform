import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from './material-module';

// import interceptors
import { JwtInterceptor } from 'src/app/interceptor/aap';

// import services
import { serviceList } from "src/app/service/aap/service.module";

// import repositories
import { repositoryList } from "src/app/repository/aap/repository.list";

// import module components
import { AppComponent } from './app.component';
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
    MaterialModule,
    appRouting
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ...serviceList,
    ...repositoryList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
