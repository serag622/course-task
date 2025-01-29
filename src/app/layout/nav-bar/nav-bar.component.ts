import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  openSidenav() {
    if (document.body.clientWidth > 600) {
      document.getElementById('side_nav')!.style.width = '400px';
    } else {
      document.getElementById('side_nav')!.style.width = '100%';
    }
  }

  closeSidenav(){
    document.getElementById('side_nav')!.style.width = '0px';
  }
}
