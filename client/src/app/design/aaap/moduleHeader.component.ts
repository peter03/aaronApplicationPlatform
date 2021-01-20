import { Component, Input } from "@angular/core";

@Component({
  selector: "aaap-module-header",
  template: `<h4 class="border border-dark bg-info p-2">
              {{ title | translate }}
            </h4>`
})

export class ModuleHeaderComponent {
  @Input() title: string;
  constructor() {}
}
