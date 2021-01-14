import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { MenuRepository } from "src/app/repository/aap/menu.repository";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(public repo: MenuRepository,
    public router: Router) {
  }

  navigateToRoot() {
    this.repo.buildSubmenu(null);
    this.router.navigate(["mainmenu"]);
  }
  
}
