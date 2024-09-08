import { Component, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuIconClass = 'bx bx-menu-alt-right';
  isMenuOpen = false;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    // Subscribe to route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.resetMenu();
      }
    });

    // Click event handling
    this.renderer.listen('document', 'click', (event: Event) => {
      const target = event.target as HTMLElement;
      const menuElement = document.querySelector('.mobile-navigator');
      const iconElement = document.querySelector('.mobile-menu i');

      if (menuElement && iconElement && !menuElement.contains(target) && !iconElement.contains(target)) {
        this.resetMenu();
      }
    });
  }

  toggleMenuIcon() {
    this.isMenuOpen = !this.isMenuOpen;
    this.menuIconClass = this.isMenuOpen ? 'bx bx-x' : 'bx bx-menu-alt-right';
  }

  resetMenu() {
    this.menuIconClass = 'bx bx-menu-alt-right';
    this.isMenuOpen = false;
  }
}
