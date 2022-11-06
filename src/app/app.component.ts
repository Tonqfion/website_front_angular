import {Component} from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  isOpen: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sidenav';
  isSideNavOpen = true;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavOpen = data.isOpen;
  }
}
