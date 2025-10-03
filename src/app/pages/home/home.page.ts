import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit, OnDestroy {
  currentIndex = 0;
  interval: any;
  totalSlides = 3;

  ngOnInit() {
    this.interval = setInterval(() => this.nextSlide(), 3000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
