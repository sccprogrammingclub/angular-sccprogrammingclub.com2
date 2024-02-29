import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  screenWidth: any;
  smallScreen: boolean = true;
  collapsed: boolean = true;

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', [])
  private onResize() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 660) {
      this.smallScreen = true;
    } else {
      this.smallScreen = false;
    }
  }

  hide() {
    this.collapsed = true;
  }

  onClickMenu() {
    if (this.collapsed) {
      this.collapsed = false;
    } else {
      this.collapsed = true;
    }
    return this.collapsed;
  }
}
