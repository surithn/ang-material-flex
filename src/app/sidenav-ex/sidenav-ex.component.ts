import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-ex',
  templateUrl: './sidenav-ex.component.html',
  styleUrls: ['./sidenav-ex.component.css']
})
export class SidenavExComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  links = ['home', 'info', 'help'];
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

}
