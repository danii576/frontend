import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    FormsModule,
    CommonModule,
    TranslateModule,AppModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('frontend');
  isDarkTheme = false;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'pt']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
    document.body.classList.toggle('light-theme', !this.isDarkTheme);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
