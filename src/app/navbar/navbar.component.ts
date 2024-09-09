import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent{
  menuIconClass = 'bx bx-menu-alt-right';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuIconClass = this.isMenuOpen ? 'bx bx-x' : 'bx bx-menu-alt-right';
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.menuIconClass = 'bx bx-menu-alt-right';
  }
}
