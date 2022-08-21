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
      'backet',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/backet.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'spiner',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/spiner.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'trash',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/trash.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'edit',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/edit.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'archive',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/archive.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'add',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/add.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'attach',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/attach.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'done',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../assets/icons/done.svg'
      )
    );
  }
}
