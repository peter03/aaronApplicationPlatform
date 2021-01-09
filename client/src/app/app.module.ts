import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

import { MaterialModule } from './material-module';


// import services
//import { AuthenticationService } from 'src/app/service/aap/authentication.service';
import { serviceList } from "src/app/service/aap/service.module";

// import repositories
import { repositoryList } from "src/app/repository/aap/repository.list";

// import module components
import { AppComponent } from './app.component';
//import { MainMenuComponent } from "src/app/module/aap/mainmenu/mainMenu.component";
import { routingComponents, appRouting } from './app-routing.module';
//import { userRoutes, userComponents } from "src/app/module/aap/user/user.routing";


@NgModule({
  declarations: [
    AppComponent,
    //MainMenuComponent
    routingComponents
    //userComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    appRouting
    //userRoutes
  ],
  providers: [
    //AuthenticationService,
    ...serviceList,
    ...repositoryList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
