import {animate, keyframes, style, transition, trigger} from '@angular/animations';
import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {navData} from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  isOpen: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(180deg)', offset: '.5'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  isOpen = false;
  screenWidth = 0;
  navData = navData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.isOpen = false;
      this.onToggleSideNav.emit({isOpen: this.isOpen, screenWidth: this.screenWidth});
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.isOpen = !this.isOpen;
    this.onToggleSideNav.emit({isOpen: this.isOpen, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.isOpen = false;
    this.onToggleSideNav.emit({isOpen: this.isOpen, screenWidth: this.screenWidth});
  }
}
