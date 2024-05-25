import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    MenubarModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{
  isHeaderHidden = false;
  scrollPos:any;
  onScroll() {
    // Si la fenêtre est défilée vers le bas
    if (window.scrollY > this.scrollPos) {
      this.isHeaderHidden = true;
    } else { // Si la fenêtre est défilée vers le haut
      this.isHeaderHidden = false;
    }
    this.scrollPos = window.scrollY;
  }
}
