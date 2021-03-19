import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  iconos = [
    'ship-info-icon'
  ];


  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer
  ) {

    this.iconos.forEach(i => {
      iconRegistry.addSvgIcon(
        i,
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/' + i + '.svg')
      );
    });
   }

  ngOnInit(): void {
  }

}
