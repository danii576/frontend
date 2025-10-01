import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class NavbarComponent {
  searchQuery: string = '';
  menuOpen: boolean = false;
  openSubmenu: string | null = null;

  // Language (toggle, no dropdown)
  currentLang: string = 'pt';
  currentFlag: string = 'assets/images/flag/flag-PT.png';

  // Theme
  isDarkTheme: boolean = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleSubmenu(menu: string) {
    this.openSubmenu = this.openSubmenu === menu ? null : menu;
  }

  onSearch() {
    console.log('Searching for:', this.searchQuery);
  }

  goHome() {
    this.router.navigate(['/']);
  }

  // Language toggle (simple swap)
  toggleLanguage() {
    if (this.currentLang === 'pt') {
      this.currentLang = 'en';
      this.currentFlag = 'assets/images/flag/flag-EN.png';
    } else {
      this.currentLang = 'pt';
      this.currentFlag = 'assets/images/flag/flag-PT.png';
    }
    console.log('Language changed to:', this.currentLang);
  }

  // Theme toggle
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
