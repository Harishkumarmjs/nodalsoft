import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconRegistry } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatIconModule
  ],
  exports: [MatIconModule]
})
export class MaterialModule {
  iconsArr = [

  ]
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.iconsArr.map((icon) => {
      this.matIconRegistry.addSvgIcon(
        icon[0],
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon[1])
      );
    });
  }

}

