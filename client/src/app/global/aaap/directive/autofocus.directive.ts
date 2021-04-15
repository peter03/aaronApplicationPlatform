import { AfterContentInit, Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[aaap_autofocus]"
})
export class AutofocusDirective implements AfterContentInit {
  @Input() public appAutoFocus: boolean;

  public constructor(private el: ElementRef) { }

  public ngAfterContentInit() {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 100);
  }
}
