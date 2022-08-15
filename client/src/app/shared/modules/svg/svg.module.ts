import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@NgModule()
export class SvgModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'visibility',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/visibility.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'visibility-off',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/icons/visibility_off.svg'
      )
    );
  }
}
